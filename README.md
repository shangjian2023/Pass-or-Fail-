# 📚 期末求生计算器

<p align="center">
  <img src="assets/icon.png" width="120" alt="期末求生计算器图标">
</p>

<p align="center">
  <strong>大学生成绩预测神器 - 精准计算期末需要考多少分</strong>
</p>

<p align="center">
  <a href="#功能特点">功能特点</a> •
  <a href="#下载安装">下载安装</a> •
  <a href="#使用指南">使用指南</a> •
  <a href="#技术架构">技术架构</a> •
  <a href="#开发构建">开发构建</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0.0-blue.svg" alt="版本">
  <img src="https://img.shields.io/badge/platform-Windows-green.svg" alt="平台">
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="许可证">
  <img src="https://img.shields.io/badge/Electron-28.x-9fe2bf.svg" alt="Electron">
  <img src="https://img.shields.io/badge/状态-稳定发布-brightgreen.svg" alt="状态">
</p>

> 🎉 **2.0版本重磅发布！** 从纯Web应用升级为完整的Electron桌面应用，带来更流畅的体验和更强大的功能！

---

## ✨ 功能特点

### 🎯 核心计算功能
- **智能成绩计算**：根据平时分和权重精准计算期末所需分数
- **多场景目标设定**：
  - 🎓 不挂科模式（60分）
  - ⭐ 冲绩点模式（80分）
  - 🏆 保研线模式（90分）
  - 📝 自定义目标分数
- **灵活权重设置**：支持30%、40%、50%、60%等常用比例，也可自定义

### 😊 情绪反馈系统
根据计算结果提供不同的情绪反馈和实用建议：

| 所需分数 | 表情 | 状态标签 | 提示信息 |
|---------|------|---------|---------|
| > 100分 | 😱 | 难度爆表 | 难度较大，需超常发挥！ |
| 85-100分 | 😰 | 挑战较大 | 需要努力复习，加油！ |
| 60-85分 | 😊 | 压力适中 | 正常发挥就能达到 |
| 0-60分 | 😄 | 轻松达成 | 恭喜！你已经稳过了 |
| < 0分 | 🎉 | 稳过无疑 | 即使不考也能及格！ |

### 📤 分享功能
- 一键生成精美的成绩预测卡片
- 支持下载为PNG高清图片
- 包含励志祝福语："转发此图，期末必过！"

### 🎨 界面设计
- **毛玻璃效果**：现代化的半透明卡片设计
- **渐变背景**：优雅的紫蓝渐变配色
- **浮动动画**：背景装饰元素动态漂浮
- **数字动画**：计算结果滚动显示效果
- **响应式布局**：完美适配各种屏幕尺寸

---

## 📥 下载安装

### 系统要求
- **操作系统**：Windows 7 / 8 / 10 / 11
- **架构支持**：x64 (64位) 和 ia32 (32位)
- **存储空间**：约 150MB 可用空间
- **无需额外依赖**：独立运行，无需安装Node.js或其他环境

### 下载方式

#### 方式一：便携版（推荐）
下载 `期末求生计算器-Portable-2.0.0.exe`，双击即可运行，无需安装。

**优点**：
- 无需安装，即开即用
- 可放在U盘随身携带
- 不写注册表，绿色无污染

#### 方式二：安装版
下载 `期末求生计算器-Setup-2.0.0.exe`，按安装向导进行安装。

**优点**：
- 创建桌面快捷方式
- 添加到开始菜单
- 可自定义安装目录

### 下载地址
📦 请在本项目的 [Releases](../../releases) 页面下载最新版本。

---

## 📖 使用指南

### 快速开始

1. **启动应用**
   - 便携版：双击 `期末求生计算器-Portable-2.0.0.exe`
   - 安装版：从开始菜单或桌面快捷方式启动

2. **输入平时分**
   - 在第一个输入框中输入你已获得的平时成绩（0-100分）
   - 或使用下方的滑块快速调整

3. **选择平时分占比**
   - 点击常用比例按钮（30%/40%/50%/60%）
   - 或拖动滑块自定义权重

4. **设定目标分数**
   - 点击预设目标按钮（不挂科/冲绩点/保研线）
   - 或在自定义目标框中输入具体分数

5. **查看结果**
   - 点击"开始计算"按钮
   - 查看期末所需分数和情绪反馈
   - 根据需要调整目标或复习计划

### 计算公式

```
期末需要分数 = (目标总分 × 100 - 平时成绩 × 平时权重) ÷ (100 - 平时权重)
```

**计算示例**：
- 平时分：85分
- 平时权重：40%
- 目标总分：80分
- **期末需要考：76.7分**

### 生成分享卡片

1. 完成计算后，点击"生成成绩预测卡片"按钮
2. 在弹出的模态框中预览卡片效果
3. 点击"保存图片"按钮下载PNG格式卡片
4. 分享到朋友圈或发送给同学

### 快捷键

| 快捷键 | 功能 |
|-------|------|
| `Enter` | 触发计算（在输入框中） |
| `Escape` | 关闭分享卡片弹窗 |

---

## 🏗️ 技术架构

### 技术栈

| 层级 | 技术 | 说明 |
|-----|------|------|
| **桌面框架** | Electron 28.x | 跨平台桌面应用框架 |
| **前端核心** | HTML5 + CSS3 + JavaScript | 原生Web技术 |
| **UI设计** | CSS Variables + Flexbox/Grid | 现代化布局 |
| **图标处理** | Sharp + png-to-ico | 图标格式转换 |
| **打包工具** | electron-builder | 应用打包分发 |

### 项目结构

```
Pass-or-Fail-/
├── 📁 assets/                    # 资源文件
│   ├── icon.svg                  # 矢量图标源文件
│   ├── icon.png                  # PNG格式图标
│   └── icon.ico                  # Windows图标
│
├── 📁 期末求生计算器/             # 应用源代码
│   ├── index.html               # 主页面
│   ├── styles.css               # 样式文件
│   └── script.js                # 核心逻辑
│
├── 📁 dist/                     # 打包输出目录
│   ├── 期末求生计算器-Setup-1.0.0.exe      # 安装程序
│   ├── 期末求生计算器-Portable-1.0.0.exe   # 便携版
│   ├── win-unpacked/            # 解压后的x64版本
│   └── win-ia32-unpacked/       # 解压后的ia32版本
│
├── main.js                      # Electron主进程
├── package.json                 # 项目配置
├── create-icon.js               # 图标生成脚本
└── README.md                    # 项目说明
```

### 核心功能模块

#### 1. 成绩计算引擎 (`script.js`)
```javascript
// 核心计算公式
const finalWeight = 100 - weight;
const requiredScore = (target * 100 - usualScore * weight) / finalWeight;
```

#### 2. 情绪反馈系统
根据计算结果动态匹配表情、状态标签和建议信息，提供人性化的交互体验。

#### 3. 分享卡片生成器
使用Canvas API动态绘制精美分享卡片，支持高清输出。

#### 4. Electron窗口管理 (`main.js`)
- 窗口尺寸：520×800（最小480×600）
- 单实例运行控制
- 应用生命周期管理

---

## 🛠️ 开发构建

### 环境要求
- Node.js 18.x 或更高版本
- npm 9.x 或更高版本
- Windows 操作系统

### 本地开发

1. **克隆仓库**
```bash
git clone https://github.com/shangjian2023/Pass-or-Fail-.git
cd Pass-or-Fail-
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发模式**
```bash
npm start
```

### 构建打包

#### 构建Windows版本
```bash
# 构建完整版本（安装程序 + 便携版）
npm run build:win

# 仅构建便携版
npm run build:portable

# 构建未打包版本（用于调试）
npm run pack
```

#### 构建输出
- `dist/期末求生计算器-Setup-2.0.0.exe` - 安装程序
- `dist/期末求生计算器-Portable-2.0.0.exe` - 便携版
- `dist/win-unpacked/` - 未打包的x64版本
- `dist/win-ia32-unpacked/` - 未打包的ia32版本

### 自定义配置

#### 修改应用信息
编辑 `package.json` 文件：
```json
{
  "name": "final-exam-calculator",
  "productName": "期末求生计算器",
  "version": "1.0.0",
  "description": "大学生成绩预测神器",
  "author": "你的名字"
}
```

#### 修改窗口尺寸
编辑 `main.js` 文件：
```javascript
mainWindow = new BrowserWindow({
  width: 520,
  height: 800,
  minWidth: 480,
  minHeight: 600
});
```

#### 更换应用图标
1. 替换 `assets/icon.svg` 文件
2. 运行 `node create-icon.js` 生成新图标
3. 重新打包

---

## 🌐 浏览器版本

本项目同时支持作为纯Web应用运行：

```bash
cd 期末求生计算器
python -m http.server 8080
```

然后访问 http://localhost:8080

> **注意**：浏览器版本的部分功能（如文件保存）可能受限。

---

## 📝 更新日志

### v2.0.0 (2024-02-20) - 桌面版重磅升级 🚀

**相比1.0版本的重大改进：**

#### 🖥️ 架构升级
| 特性 | 1.0版本 | 2.0版本 | 提升 |
|------|---------|---------|------|
| **应用类型** | 纯Web应用（浏览器运行） | Electron桌面应用 | 独立运行，无需浏览器 |
| **启动方式** | 需打开浏览器访问 | 双击EXE直接启动 | 更快捷 |
| **离线使用** | 需要网络（CDN资源） | 完全离线可用 | 100%离线 |
| **系统集成** | 无 | 完整的Windows集成 | 深度集成 |

#### ⚡ 性能优化
- **启动速度**：从浏览器加载2-3秒优化到桌面应用秒开
- **资源加载**：所有资源本地打包，无需网络请求
- **内存占用**：优化后的独立进程管理
- **响应速度**：原生桌面体验，无浏览器开销

#### 🎨 界面增强
- **窗口管理**：固定尺寸窗口（520×800），避免浏览器标签干扰
- **最小化/最大化**：完整的窗口控制
- **任务栏集成**：显示应用图标和标题
- **单实例运行**：防止重复打开多个窗口

#### 📦 分发方式
- **便携版**：`期末求生计算器-Portable-2.0.0.exe`
  - 无需安装，即开即用
  - 可放在U盘随身携带
  - 不写注册表，绿色无污染
  
- **安装版**：`期末求生计算器-Setup-2.0.0.exe`
  - 创建桌面快捷方式
  - 添加到开始菜单
  - 可自定义安装目录
  - 支持卸载程序

#### 🔧 技术升级
- **框架**：新增Electron 28.x桌面框架
- **打包工具**：新增electron-builder自动化打包
- **图标系统**：新增多尺寸ICO图标支持
- **代码签名**：支持Windows代码签名（可选）

#### 🛡️ 稳定性提升
- **错误处理**：完善的错误捕获和提示
- **进程管理**：优雅的应用生命周期管理
- **资源释放**：退出时自动清理资源
- **防多开**：单实例锁防止重复启动

---

### v1.0.0 (2024-02-20) - 初始版本
- ✨ 基础Web应用发布
- 🎨 现代化UI设计（毛玻璃效果、渐变背景）
- 🧮 智能成绩计算功能
- 😊 情绪反馈系统
- 📤 分享卡片生成功能
- � 响应式布局支持

---

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 提交Issue
- 描述问题时请提供复现步骤
- 附上截图（如适用）
- 注明操作系统版本

### 提交代码
1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

---

## ⚠️ 免责声明

1. 本计算器仅供参考，实际成绩以老师录入为准。
2. 计算结果基于标准加权算法，具体评分规则可能因学校/老师而异。
3. 开发者不对因使用本工具产生的任何后果承担责任。

---

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源。

```
MIT License

Copyright (c) 2024 期末求生团队

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👨‍💻 作者

- **共产主义接班人**
- GitHub: [@shangjian2023](https://github.com/shangjian2023)

---

<p align="center">
  <strong>🍀 祝所有大学生期末不挂科！🍀</strong>
</p>

<p align="center">
  <sub>Made with ❤️ and ☕ by 期末求生团队</sub>
</p>
