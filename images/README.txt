图片替换指南
=============

将你的真实照片/截图放入此文件夹，然后在 index.html 中找到对应的 .photo-placeholder 替换即可。

需要准备的图片：

CNC 加工经历：
  cnc-machine.jpg     — CNC 机床照片
  cnc-workshop.jpg    — 加工现场照片
  cnc-workpiece.jpg   — 工件照片
  cnc-drawing.jpg     — 图纸打码截图

塑料机械配件：
  parts-screw.jpg     — 螺杆照片
  parts-barrel.jpg    — 机筒照片
  parts-tiebar.jpg    — 拉杆 / 哥林柱照片
  parts-packing.jpg   — 包装发货照片

外贸业务实践：
  trade-fb.jpg        — Facebook 主页截图
  trade-linkedin.jpg  — LinkedIn 主页截图
  trade-chat.jpg      — 客户沟通打码截图
  trade-email.jpg     — 产品文案 / 开发信截图

AI 工具尝试：
  ai-table.jpg        — 客户表格打码截图
  ai-template.jpg     — 开发信模板截图
  ai-test.jpg         — 邮件发送测试截图
  ai-files.jpg        — 项目文件截图

替换方法：
1. 把图片放入这个文件夹
2. 在 index.html 中找到对应板块的 .photo-placeholder
3. 把里面的 SVG 和文字替换为：<img src="images/xxx.jpg" alt="描述" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">
4. 保存后刷新浏览器

注意：所有涉及客户隐私的内容必须打码！
