---
title: 给你的Spotify安装非官方主题
date: 2023-02-12 15:58:06
updated: 2023-02-12 15:58:06
---
# 简介
一款支持自定义Spotify主题的插件。
官方网站：https://spicetify.app/
官方文档：https://spicetify.app/docs/getting-started
![Spicetify](/upload/2023/02/Spicetify.png)

## **安装插件**

### Windows
打开Powershell，复制粘贴下面代码并执行：
```
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.ps1 | iex
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.ps1 | iex
```

### Linux and MacOS
shell：
```
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```


## 安装主题
[主题列表](https://spicetify.app/docs/advanced-usage/themes)
页面目前(2023/02/12)一共5个主题，如果你不喜欢也可以自行参考官方文档进行创作并选择分享出来。
每个主题页面都有比较详细的安装流程，没什么难度，就随便搬了其中一个一键命令的。

Windows -> PowerShell:
```
iwr -useb https://raw.githubusercontent.com/NYRI4/Comfy-spicetify/main/install.ps1 | iex
```

macOS and Linux -> Bash:
```
curl -fsSL https://raw.githubusercontent.com/NYRI4/Comfy-spicetify/main/install.sh | sh
```


Done.
