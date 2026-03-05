# LilysToolKits-H5

<div align="center">

![LilysToolKits Logo](https://img.shields.io/badge/LilysToolKits-v1.0.2-blue.svg)
![License](https://img.shields.io/badge/license-GPL%20v3-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**一个轻量级的离线工具集合，提供常用的开发工具和转换器**

[快速开始](#快速开始) • [功能特性](#功能特性) • [使用说明](#使用说明) • [项目结构](#项目结构) • [贡献指南](#贡献指南)

</div>

## 📋 目录

- [关于项目](#-关于项目)
- [功能特性](#-功能特性)
- [快速开始](#-快速开始)
- [使用说明](#-使用说明)
- [项目结构](#-项目结构)
- [技术栈](#-技术栈)
- [许可证](#-许可证)
- [联系方式](#-联系方式)

## 🌟 关于项目

LilysToolKits-H5 是一个纯前端的离线工具集合，专为开发者和日常用户设计。它提供了多种实用的转换工具，无需联网即可使用，保护您的数据隐私。

### 设计理念

- 🌐 **离线优先**: 无需网络连接，随时随地使用
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🎨 **现代化界面**: 简洁优雅的UI设计，专注核心功能
- ⚡ **高性能**: 纯前端实现，响应速度快
- 🔒 **数据安全**: 所有数据处理均在本地完成

## ✨ 功能特性

### 🧮 进制转换器
- 支持十进制、十六进制、二进制之间的相互转换
- 实时转换，输入即显示结果
- 支持大数值转换（最大 2^53-1）
- 内置数字键盘，方便输入
- 一键复制转换结果

### 🔤 Hex/ASCII转换器
- 十六进制与ASCII码之间的双向转换
- 支持批量字符转换
- 实时预览转换结果
- 自动格式化Hex输入
- 一键复制转换结果

### 💡 光模块计算器
- **DDM参数转换**: 温度、电压、偏置电流、光功率
- **BER/SNR转换**: 误码率与信噪比转换
- **光功率单位转换**: mW与dBm相互转换
- **可靠性单位转换**: FIT与PPM相互转换

## 🚀 快速开始

### 环境要求

- 现代浏览器（Chrome 60+、Firefox 55+、Safari 12+、Edge 79+）
- 无需额外依赖或安装

### 安装使用

1. **克隆仓库**
   ```bash
   git clone https://gitee.com/jasonw-yu/lilystoolkits-h5.git
   cd lilystoolkits-h5
   ```

2. **直接使用（推荐）**
   - 直接打开 `home/index.html` 文件即可开始使用
   - 无需任何安装或配置

3. **使用本地服务器（可选）**
   如果需要通过HTTP访问，可以使用任何本地服务器：
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 使用 Node.js
   npx http-server

   # 使用 PHP
   php -S localhost:8000
   ```

4. **访问应用**
   - 直接打开: 双击根目录 `index.html` 或 `home/index.html` 文件
   - 本地服务器: 访问 `http://localhost:8000/` 或 `http://localhost:8000/home/`
   - 在线访问: 部署后直接访问域名即可自动跳转到主页

## 📖 使用说明

### 主界面
- 打开应用后，您将看到三个主要工具的入口
- 点击任意工具卡片即可进入相应的功能页面
- 每个页面都有返回主页的导航链接

### 进制转换器
1. 选择输入数值的进制类型（十进制/十六进制/二进制）
2. 使用数字键盘或直接键盘输入数值
3. 实时查看其他进制的转换结果
4. 点击复制按钮可快速复制结果

### Hex/ASCII转换器
1. 在任意输入框中输入内容
2. 点击转换按钮进行转换
3. 支持特殊字符和 Unicode
4. 点击复制按钮可快速复制结果

### 光模块计算器
1. 输入已知参数（如功率、波长等）
2. 点击转换按钮进行计算
3. 自动计算相关参数
4. 提供计算结果和建议值

## 📁 项目结构

```
lilystoolkits-h5/
├── home/                  # 主页
│   ├── index.html         # 主页面
│   ├── style.css          # 通用样式
│   └── main.js            # 主页面逻辑
├── converter/             # 进制转换器
│   ├── converter.html     # 进制转换器页面
│   ├── converter.css      # 进制转换器样式
│   └── converter.js       # 进制转换器逻辑
├── hexascii/              # Hex/ASCII转换器
│   ├── hexascii.html      # Hex/ASCII转换器页面
│   ├── hexascii.css       # Hex/ASCII转换器样式
│   └── hexascii.js        # Hex/ASCII转换器逻辑
├── optical/               # 光模块计算器
│   ├── optical.html       # 光模块计算器页面
│   ├── optical.css        # 光模块计算器样式
│   └── optical.js         # 光模块计算器逻辑
├── README.md              # 项目说明文档
├── CHANGELOG.md           # 版本更新记录
├── LICENSE                # 许可证文件
└── .gitignore             # Git忽略文件
```

## 🛠️ 技术栈

- **前端框架**: 原生 HTML5 + CSS3 + JavaScript (ES6+)
- **样式框架**: 自定义 CSS，响应式设计，现代渐变风格
- **图标**: 内置 SVG 图标 + Emoji
- **构建工具**: 无需构建，开箱即用
- **版本控制**: Git
- **许可证**: GNU GPL v3.0

## 📄 许可证

本项目采用 [GNU GPL v3.0](LICENSE) 许可证。

```text
Copyright (C) 2024 Lily's Tool Kits

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
```

## 📞 联系方式

- **项目主页**: [https://gitee.com/jasonw-yu/lilystoolkits-h5](https://gitee.com/jasonw-yu/lilystoolkits-h5)
- **问题反馈**: [Gitee Issues](https://gitee.com/jasonw-yu/lilystoolkits-h5/issues)
- **邮箱**: lilyy.tong@qq.com

## 🙏 致谢

感谢所有为开源社区做出贡献的开发者们，以及本项目的所有使用者。

---

