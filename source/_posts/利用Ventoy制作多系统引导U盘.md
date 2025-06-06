---
title: 利用Ventoy制作多系统引导U盘
date: 2023-02-15 17:00:08
updated: 2023-02-15 17:00:08
---
# 准备工作

1.一个32G及以上(推荐)的U盘，速度越快越好
2.[Ventoy](https://www.ventoy.net/cn/download.html)（根据系统选择安装包）
3.一台电脑(以WIN为例)

## 一、制作Ventoy启动U盘
插入用来制作引导的U盘，打开 **Ventoy2Disk.exe**
在设备选项选中U盘，然后点开左上角配置选项，

只需要注意以下两个选项设置：
- **分区类型**
	默认MBR（如果没有特殊需求，建议保持默认，除非你的BIOS只能识别UEFI）


|     | 支持分区数量  | 支持硬盘大小 |
| --- | ------------- | ------------ |
| MBR | 最大4个分区   | 2T及以下     |
| GPT | 最大128个分区 | 无限制       |
 
- **分区设置**

	**分区文件系统类型：**
	如果需要WTG，则可以选择NTFS，否则建议默认（exFAT）
	在磁盘最后保留一段空间
	**留给其他用途的空间：**（如黑苹果引导，Ventoy原生暂不支持，需要单独分区制作）
	看个人需求选择，没有需求可以不勾选

确认无误点击"安装"，稍等一会会提示安装完成，系统内会多出一个名为“**Ventoy**”的磁盘
容量大小=U盘实际大小-“留给其他用途的空间设置的容量”

## 二、安装其他系统引导

**下载需要的系统镜像ISO文件后复制到Ventoy主分区下即可。**
系统镜像下载优先推荐微软官方地址：https://www.microsoft.com/zh-cn/software-download/
其次itellyou:https://msdn.itellyou.cn/
以及新版itellyou(资源更新，有除WIN外其他镜像，但需注册):https://next.itellyou.cn/Original/Index?id=7ab5f0cb-7607-4bbe-9e88-50716dc43de6


