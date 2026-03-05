# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-05

### Added
- 🎨 **全新UI设计系统**
  - 采用现代化卡片式设计风格
  - 渐变色彩主题（蓝紫渐变）
  - 统一的CSS变量系统
  - 响应式布局优化

- ✨ **新增功能**
  - 一键复制功能（所有转换结果）
  - Toast提示消息系统
  - SVG图标支持
  - Emoji图标增强
  - 平滑过渡动画效果
  - 键盘导航支持

- 📱 **响应式优化**
  - 完美适配桌面设备
  - 完美适配平板设备
  - 完美适配移动设备
  - 触摸友好的交互设计

### Removed
- 🗑️ 删除 package.json 文件，项目完全纯静态化
  - 无需任何依赖或构建工具
  - 真正的"开箱即用"体验
  - 更符合离线工具的定位

### Changed
- 🎨 **UI重构**
  - 主页：全新卡片式布局，添加特性说明区域
  - 进制转换器：现代化设计，添加复制按钮
  - Hex/ASCII转换器：优化交互体验，添加转换指示器
  - 光模块计算器：卡片式布局，优化参数输入

- 🔧 **代码优化**
  - 重构CSS变量系统，提升可维护性
  - 统一组件样式规范
  - 优化JavaScript代码结构
  - 添加详细代码注释

- 📝 **文档更新**
  - 更新README.md文档
  - 创建CHANGELOG.md文档
  - 更新版本号到v1.0.0

### Fixed
- 🐛 修复响应式布局问题
- 🐛 修复移动端触摸交互问题
- 🐛 修复输入框焦点样式问题

## [0.0.6] - 2026-01-24

### Changed
- 📁 重新组织项目结构，每个工具独立文件夹
- 🔗 更新所有页面间的导航链接
- 📦 方便整体或单独分发小工具
- 🏠 主页移至 home/ 文件夹
- 🧮 converter/ 文件夹包含进制转换器
- 🔤 hexascii/ 文件夹包含 Hex/ASCII 转换器
- 💡 optical/ 文件夹包含光模块计算器

## [0.0.5] - 2026-01-24

### Changed
- 🔢 统一版本号到 0.0.5
- 📦 更新 package.json 版本号
- 🏠 更新 index.html 中的版本显示
- 📱 更新 README.md 版本徽章

## [0.0.4] - 2026-01-24

### Added
- 📋 添加 CONTRIBUTING.md 贡献指南
- 📜 添加 CODE_OF_CONDUCT.md 行为准则

### Changed
- 🏗️ 更新项目结构文档，移除不存在的 assets 目录
- 📦 更新 package.json 信息（版本、邮箱、仓库链接）
- 🔧 完善 GitHub 最佳实践文件结构

## [0.0.3] - 2026-01-24

### Changed
- 📧 更新联系邮箱为 lilyy.tong@qq.com
- 🗑️ 移除计划中的功能列表
- 📱 更新版本号到 v0.0.3

## [0.0.2] - 2026-01-24

### Added
- 📝 添加完整的 README.md 文档
- 📋 添加 revision.md 版本更新记录
- 🔧 优化项目文档结构

## [0.0.1] - 2024-01-24

### Added
- ✨ 初始版本发布
- 🧮 进制转换器功能
  - 支持十进制、十六进制、二进制转换
  - 内置数字键盘
  - 实时转换显示
- 🔤 Hex/ASCII转换器功能
  - 十六进制与ASCII码双向转换
  - 支持批量字符转换
  - 实时预览
- 💡 光模块计算器功能
  - DDM参数转换
  - BER/SNR转换
  - 光功率单位转换
  - 可靠性单位转换
- 📱 响应式设计支持
- 🎨 现代化UI界面

---

## 版本说明

- **[1.0.0]** - 重大版本更新，全新UI设计系统
- **[0.0.x]** - 早期开发版本，功能逐步完善

## 升级指南

### 从 0.0.x 升级到 1.0.0

1. **备份现有数据**（如果有自定义修改）
2. **更新所有文件**到最新版本
3. **清除浏览器缓存**以确保新样式生效
4. **检查自定义修改**是否与新版本兼容

### 注意事项

- v1.0.0 包含重大UI变更，可能与之前的自定义修改不兼容
- 建议在升级前备份整个项目
- 新版本使用了CSS变量系统，需要现代浏览器支持

## 未来计划

- [ ] 添加暗色模式支持
- [ ] 添加更多实用工具
- [ ] 支持PWA离线应用
- [ ] 添加国际化支持
- [ ] 优化移动端体验

---

[1.0.0]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.6...v1.0.0
[0.0.6]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.5...v0.0.6
[0.0.5]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.4...v0.0.5
[0.0.4]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.3...v0.0.4
[0.0.3]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.2...v0.0.3
[0.0.2]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.1...v0.0.2
[0.0.1]: https://gitee.com/jinwyu/lilystoolkits-h5/releases/tag/v0.0.1
