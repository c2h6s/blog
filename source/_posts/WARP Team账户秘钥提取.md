---
title: WARP Team账户秘钥提取
date: 2023-02-10 16:30:00
updated: 2023-02-10 16:30:00
---
# 简介
WARP是Cloudflare旗下的VPN服务，基于wireguard协议。
 
  
## 工作前准备

[warp客户端下载](https://1.1.1.1/)

[雷电模拟器3国际版下载 ](https://ldcdn.ldmnq.com/LDPlayer3.exe?n=LDPlayer3_ens_75962714_ld.exe)

[老版安卓warp官方客户端(6.9版本)](https://apkpure.com/cn/1-1-1-1-faster-safer-internet/com.cloudflare.onedotonedotonedotone/versions)

需要特定版本是因为新版中对被提取文件进行了加密，无法提取


提取teams密钥:

雷电安装目录右键打开Powershell

复制粘贴以下代码提取文件：

```
./adb connect 127.0.0.1:5555
./adb kill-server
./adb pull /data/data/com.cloudflare.onedotonedotonedotone/shared_prefs/com.cloudflare.onedotonedotonedotone_preferences.xml
```
打开名为com.cloudflare.onedotonedotonedotone_preferences.xml的密钥文件，Ctrl+F查找以下关键字：

关键字1：warp_private_key  ，复制保存私key

关键字2：warp_tunnel_config  ，复制保存不带[]括号的IPV6地址

如提示未找到设备，把雷电模拟器的基本设置中"ADB调试"选项设置为"开启本地连接"


### 可能出现的问题：
Q：无法完成WARP客户端设置，一直转圈或者错误
A：电脑端开启WireGuard/WARP官方客户端做代理，再打开模拟器操作


关于Zero Trust的teams账户有效性：
密钥长期有效，但不要更改团队域名称或者CF后台删除/停止设备等操作，否则会导致无法正常连接，需要重新提取文件。

