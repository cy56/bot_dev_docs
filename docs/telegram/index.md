# 机器人 开发指南

# 目录
[[toc]]

## 申请机器人账号
1. 首先，需要开启telegram(电报) 寻找一个用户(机器人) 叫 ```@BotFather```
2. 第二步，需要按```START```， 或者打```/start```
3. 第三步，回复```/newbot```, 然后回复一系列问题
4. 申请成功后，```@BotFather``` 就会提供```token```

::: details 示范(照片)
寻找botFather

![寻找botFather](/images/bot_search.png)

开始使用

![开始使用](/images/bot_start.png)

回答问题

![回答问题](/images/bot_questions.jpg)

:::

## 相关设定

### 设置command(命令)
如果想要设置机器人的命令，需要寻找```@BotFather``` 然后回复 ```/setcommands```

::: details 示范(照片)

![设置命令](/images/bot_commands.png)

:::

### 设置privacy(隐私)
设置机器人的隐私设定，同样的需要寻找```@BotFather``` 然后回复 ```/setprivacy```

::: tip 提示
主要解决无法获得群里消息

[相关资料](https://www.hiczp.com/telegram/telegram-bot-shou-bu-dao-pu-tong-qun-liao-xiao-xi-de-wen-ti.html)
:::

::: details 示范(照片)

![设置隐私](/images/bot_privacy.png)

:::

## 相关API的References
1. [getMe](https://core.telegram.org/bots/api#getme)
2. [getUpdates](https://core.telegram.org/bots/api#getupdates)
3. [setWebhook](https://core.telegram.org/bots/api#setwebhook)
4. [getWebhookInfo](https://core.telegram.org/bots/api#getwebhookinfo)
5. [deleteWebhook](https://core.telegram.org/bots/api#deletewebhook)
6. [sendMessage](https://core.telegram.org/bots/api#sendmessage)
7. [deleteMessage](https://core.telegram.org/bots/api#deletemessage)
8. [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery)
9. [inlineKeyboardmarkup](https://core.telegram.org/bots/api#inlinekeyboardmarkup)
