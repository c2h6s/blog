---
title: 创建基于ChatGPT的telegram机器人
date: 2023-03-08 18:25:26
updated: 2023-03-08 18:25:26
sticky: 1
---
# 简介
OpenaiBot是一款基于 GPT 系列模型(主要为 Openai ) 接口的ChatGPT聊天机器人，默认采用GPT-3.5-Turbo版本、可自主切换其它版本，支持跨平台/通用接口，目前能对接到QQ和Telegram使用。
[项目地址](https://github.com/LlmKira/Openaibot)

**部署要求**
- 最好有 **10 GB** 的磁盘空间
- 最好有 **1 GB** 的内存，如果需要启用图片理解，则需要 4GB
- 对 CPU 没有特殊要求。如果你需要启用 Vits 支持，则需要好一些的 CPU
- 不需要 GPU。如果需要加快图片理解，可以考虑使用
- 最好是**海外**服务器

## 开始部署

### 1. 一键脚本安装依赖/项目
```
#Arm 架构服务器
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
#海外服务器
curl -LO https://raw.githubusercontent.com/LLMKira/Openaibot/main/setup.sh && sh setup.sh
#国内服务器
curl -LO https://raw.kgithub.com/LLMKira/Openaibot/main/setup.sh && sh setup.sh
```
### 2. 安装 PM2 脚本管理器
```
apt install npm
npm install pm2@latest -g
# or
yarn global add pm2
```
### 3. 配置redis
```
apt-get install redis
systemctl start redis.service
```
### 4. 配置Telegram机器人参数
在项目目录下
```
cp Config/app_exp.toml Config/app.toml
nano Config/app.toml
```

填入自己的用户id和机器人token
```
[Controller.Telegram]
master = [114, 514] # master user id , 管理者账号 ID
botToken = '' # 机器人密钥
```
用户id获取: 私聊 ++**@getmyid_bot**++ 或 ++**@myidbot**++
机器人秘钥: 私聊 ++**@BotFather**++ 根据步骤创建机器人
### 5. 启动服务
在项目目录下
```
pm2 start pm2.json
```

### 6. 填入api秘钥
私聊机器人输入 /add_api_key xxxxx #xxxxx为api
> **Done**


## 其他

**机器人默认使用白名单模式，可以通过/add_white_user 你的用户id+suffix_id把用户添加到白名单**
> 如用户id为1688 telegram平台suffix_id为100，则格式为/add_white_user 1688100

### 注册命令
```
/chat - 交谈
/write - 续写
/forgetme - 重置记忆
/remind - 场景设定 取消用短文本覆盖
/voice - 语音支持
/trigger - 管理员启动主动回复
/trace - 管理员启动关联频道自动追踪
/cross - 管理员启动是否交叉回复
/silent - 管理员启动报错沉默
/style - 设定偏好词
/auto_adjust - 自动优化器
/set_user_cold - 设置用户冷却时间
/set_group_cold - 设置群组冷却时间
/set_token_limit - 设置输出限制长度
/set_input_limit - 设置输入限制长度
/see_api_key - 现在几个 Api key
/del_api_key - 删除 Api key
/add_api_key - 增加 Api key
/config - 获取/备份热配置文件
/set_per_user_limit - 设置普通用户额度
/set_per_hour_limit - 设置用户小时额度
/promote_user_limit - 提升用户额度
/reset_user_usage - 重置用户额度
/add_block_group - 禁止群组
/del_block_group - 解禁群组
/add_block_user - 禁止用户
/del_block_user - 解禁用户
/add_white_group - 加入白名单群组
/add_white_user - 加入白名单用户
/del_white_group - 除名白名单群
/del_white_user - 除名白名单人
/update_detect - 更新敏感词
/open_user_white_mode - 开用户白名单
/open_group_white_mode - 开群组白名单
/close_user_white_mode - 关用户白名单
/close_group_white_mode - 关群组白名单
/open - 开启机器人
/close - 关闭机器人
/change_head - 设定人设开关
/change_style - 设定风格开关
/help - 帮助
```
用法:在@BotFather 编辑机器人的commands，直接复制上面内容发送即可。

