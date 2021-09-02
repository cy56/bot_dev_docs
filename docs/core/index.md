# 核心 开发指南

# 目录
[[toc]]

## Webhook的路由入口
可以在 ```routes\api.php``` 里找到
```php
Route::prefix('telegram')->group(function () {
    Route::post('/webhook', [TelegramController::class, 'webhook'])->name('webhook');
});
```

## 关于command功能
```bash
#Telegram相关的commands
## 设置webhook
php artisan telegram:webhook
## 发送scheduled的telegram message
php artisan telegram:schedule

#活动的commands
## 发送活动新一轮的消息
php artisan activity:notify
## 生成结果
php artisan activity:result

#统计的commands
## 建立每日统计
php artisan stat:generate
```

## 关于Cron Job
请到 ```App\Console\Kernel.php```设置，如果有新的cronjob [相关reference](https://laravel.com/docs/8.x/scheduling)
```php
$schedule->command('activity:result')->everyMinute()->withoutOverlapping();
$schedule->command('activity:notify')->everyMinute()->withoutOverlapping();
$schedule->command('telegram:schedule')->everyMinute()->withoutOverlapping();
$schedule->command('stat:generate')->daily()->withoutOverlapping();
```

## 核心功能
所有核心功能都放到 ```app\Services\```

### 重要的class
#### Extractor class
位于在```App\Services\Telegram\Plugins```

Telegram的request data全部封装在这个class里面，主要数据传输都是围绕这个class

提供的服务:
1. 获取message
2. 获取chat (能获取group的资料)
3. 获取user
4. 获取event
5. 获取new member
6. 获取left member
7. ...

#### Messenger class
位于在```App\Services\Telegram\Plugins```

主要就是发送信息，资料封装在这个class里面

### Core Services
位于在```App\Services\Core```

主要业务功能全部都在这里面哦

如下:

![core](/images/core_services.png)

### Telegram功能
#### TelegramBot class
主要负责管理所有telegram bot的API

实现方法:
```php
use App\Services\Telegram\TelegramBot;

(new TelegramBot())->request(TelegramBot::METHOD_GET_ME);
```
#### TelegramBotWebhook class
主要是route到```callback```, ```command``` 还是其他的```handlers```

```php
public function handle()
{
    try {

        $event = $this->request->getEvent();

        if(in_array($event, $this->getGroupEvent())) {
            return $this->getHandler('event');
        }

        if($event !== Extractor::EVENT_UNKNOWN) {
            return $this->getHandler($event);
        }

        return $this->defaultHandler();

    } catch (Exception $e) {
        return false;
    }
}

## 主要负责新用户入群，或者用户离群
protected function getGroupEvent()
{
    return [Extractor::EVENT_MEMBER_NEW, Extractor::EVENT_MEMBER_LEFT];
}
```

#### Callback 功能
这个是来自于InlineKeyboardMarkup里的callback_data回调的哦，也是用户在telegram里按的InlineKeyboard按钮

目前的format是
```php
order|member:[member];group:[group];g:[game]

# order => 是callback的名字 对应回 App\Services\Telegram\Plugins\Callbacks\Order.php
# | => | 后的所有attributes，会变成payload

# CallbackHandler class会负责把那些attributes变成payload (array format)
# Extractor class可以用getExtraPayload函数来获取那些payload (array format)
```

入口是从```TelegramBotWebhook```route 到```CallbackHandler```

如果想要添加新的callback，可以在子callback位置添加

子callback会位置在 ```app\Services\Telegram\Plugins\Callbacks```

![callbacks](/images/core_callback.png)

*** 比较需要注意的是callback_data有limit
![limit](/images/tg_inlinekeyboard.png)

#### Command 功能
这个来自于用户在telegram里回复 ```/start```或者其他有```/```

它的添加子command，方法是跟```callback```方法一样

子command位置在```app\Services\Telegram\Plugins\Commands```

![commands](/images/core_command.png)

#### Event 功能
目前只有两种event, 新用户event和用户离开event

它的添加子event，方法是跟```callback```方法一样

子event位置在```app\Services\Telegram\Plugins\Events```


### Result 服务
位于在```App\Services\Result```

主要负责 开奖，派奖，通知

### 游戏 服务
位于在```App\Services\Game```

主要负责 游戏的一些功能