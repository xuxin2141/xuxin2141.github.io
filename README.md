# 网站编辑指南

网站是一个静态 HTML 页面，用任何文本编辑器都能修改，不需要安装编程工具。

---

## 快速开始

### 打开文件

1. 右键点击 `index.html`
2. 选择 **打开方式** → **记事本**（或用 VS Code / Notepad++ 更好）
3. 修改后 **Ctrl+S 保存**
4. 双击 `index.html` 在浏览器看效果

---

## 常见修改速查

### 1. 改邮箱
搜索 `xuxin2141` → 替换

### 2. 改个人简介（导航栏下方那行）
搜索 `He has published` → 直接改文字

### 3. 添加新论文（在现有一篇后面插入）
搜索 `<!-- Paper 6 -->`，找到结尾的 `</div>`（该条最后），在它**下面**粘贴以下模板修改：
```html
<div class="pub-entry">
  <div class="pub-header">
    <span class="pub-num">[7]</span>
    <div class="pub-meta">
      <p class="pub-authors"><strong>Xin Xu</strong>, 导师名<sup>*</sup>, et al. (2026)</p>
      <p class="pub-title">论文标题写在这里。</p>
      <p class="pub-journal"><em>期刊名</em>, 卷(期): 页码。</p>
      <div class="pub-links">
        <a href="https://doi.org/你的DOI" target="_blank">DOI</a>
        <a href="papers/文件名.pdf" target="_blank">PDF</a>
      </div>
    </div>
  </div>
  <div class="pub-figure">
    <img src="images/papers/你的插图.jpg" alt="论文插图">
  </div>
</div>
```

### 4. 论文插图怎么放
- 把你的插图图片放到 `images/papers/` 目录下
- 把论文卡片最下方的 `<div class="figure-placeholder">...</div>` 替换为：
  ```html
  <img src="images/papers/图片文件名.jpg" alt="描述">
  ```

### 5. 添加新获奖
搜索 `<!-- Award 7 -->`，在它结尾的 `</div>` 后粘贴：
```html
<div class="award-entry">
  <div class="award-header">
    <span class="award-num">[8]</span>
    <div class="award-meta">
      <span class="award-date">年份</span>
      <h3>奖项名称</h3>
      <p>备注说明</p>
    </div>
  </div>
  <div class="award-figure">
    <img src="awards/证书图片.jpg" alt="证书">
  </div>
</div>
```

### 6. 替换获奖证书图片
- 把 JPG/PNG 证书图片放到 `awards/` 目录
- 找到对应获奖卡片，把 `<img src="..."` 的路径改对
- 如果图片还不存在，留着占位符，准备好图片后替换

### 7. 替换顶部期刊封面
- 把封面图片放到 `images/covers/`
- 在 `index.html` 顶部搜索 `images/covers/`，替换对应的 `src=""` 路径
- 目前是 SVG 占位图，替换后会更漂亮

### 8. 修改导航栏目
- 搜索 `class="nav-inner"`，增减 `<a href="#xxx">` 链接
- 新增一个栏目需要：1. 在内容区新增 `<section id="xxx">`，2. 在导航里加链接

---

## 目录结构一览

```
个人网站/
├── index.html          ← 主页面，改这个就行
├── css/style.css       ← 样式（一般不用动）
├── js/main.js          ← 脚本（一般不用动）
├── images/
│   ├── photo.jpg       ← 你的照片
│   ├── covers/         ← 期刊封面
│   └── papers/         ← 论文插图（自己放）
├── papers/             ← 论文 PDF
├── awards/             ← 获奖证书图片
└── files/cv.pdf        ← 简历
```

---

## 预览 & 发布

### 本地预览
双击 `index.html` → 浏览器打开，修改前先看，改完刷新

### 发布到 GitHub Pages
1. 把改好的文件上传到你的 GitHub 仓库 `xuxin2141.github.io`
2. 等待 1-2 分钟，访问 `https://xuxin2141.github.io` 即生效

---

## 小贴士

- 改错不要紧，Ctrl+Z 撤销，或者从备份恢复
- 只改文字内容，不要动 HTML 标签结构（`<div>`, `<p>` 等）
- 每次改完保存后刷新浏览器看效果
- 如果页面乱了，可能是误删了某个 `<` 或 `>` 符号
