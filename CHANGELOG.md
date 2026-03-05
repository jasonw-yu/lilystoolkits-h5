# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-03-05

### Changed
- 📏 **页面布局优化**
  - 减少主内容区边距(从3rem到1.5rem)
  - 优化工具网格布局(最小宽度从320px到280px)
  - 缩小卡片内边距和圆角半径
  - 压缩各组件间距

- 🖥️ **桌面端改进**
  - 缩小工具图标尺寸(从56px到48px)
  - 减小标题和描述文字字号
  - 优化进制转换器按钮和输入框尺寸
  - 缩小Hex/ASCII转换器输入框高度(从120px到100px)
  - 调整数字键盘高度(从56px到48px)

- 📱 **移动端优化**
  - 进一步压缩768px以下设备的间距和字号
  - 优化480px以下小屏幕的适配
  - 所有元素尺寸按比例缩小

- 🎨 **紧凑设计**
  - 统一缩小所有padding、margin和字号
  - 优化特性说明区域的尺寸
  - 改进头部和页脚的边距

### Fixed
- 🐛 修复页面需要滚动才能显示完整内容的问题
- 🐛 优化移动端显示效果

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

---

[1.0.2]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v1.0.0...v1.0.2
[1.0.0]: https://gitee.com/jinwyu/lilystoolkits-h5/compare/v0.0.6...v1.0.0
