# 🌐 Portfolio Template

Một template portfolio hiện đại, responsive, có hỗ trợ **Dark/Light Mode**, filter dự án, và tối ưu SEO.  
Dùng để xây dựng trang cá nhân giới thiệu bản thân, dự án và thông tin liên hệ.

---

## 📂 Cấu trúc thư mục

portfolio-template/
│── index.html # Trang chính của website
│── style.css # File CSS (bao gồm light/dark mode)
│── script.js # File JS (menu, smooth scroll, filter, dark mode)
│── favicon.ico # Icon của website

---

## 🛠️ Cách chỉnh sửa

### 🎨 Màu sắc
- Màu chủ đạo hiện tại: **#3366ff**
- Đổi trong file `style.css`, ví dụ:
  ```css
  .logo { color: #3366ff; }
  .btn-cta { background: #3366ff; }
  body.dark .btn-cta { background: #3366ff; }

📝 Text

Chỉnh trong index.html, ví dụ phần Hero:
<h1>Xin chào, tôi là <span class="highlight">Nguyễn Văn A</span></h1>
<h2>Front-End Developer</h2>

🖼️ Ảnh

Thay link placeholder https://via.placeholder.com/... bằng ảnh thật của bạn.

Ví dụ trong Projects:
<img src="images/project1.png" alt="Project 1">
🚀 Deploy Website

Bạn có thể deploy miễn phí lên Netlify hoặc Vercel.

✅ Deploy với Netlify

Vào Netlify
 → Đăng nhập.

Nhấn Add new site → Import an existing project.

Kết nối GitHub (hoặc upload trực tiếp folder portfolio-template).

Netlify sẽ build và cho bạn link dạng yourname.netlify.app.

✅ Deploy với Vercel

Vào Vercel
 → Đăng nhập bằng GitHub.

Nhấn New Project → Import repo portfolio-template.

Nhấn Deploy → Lấy link dạng yourname.vercel.app.

✨ Tính năng nổi bật

Responsive trên mobile, tablet, desktop

Hero section với CTA Hire Me

Projects section có filter (All / Web / Design / App)

Dark/Light mode lưu trạng thái bằng localStorage

SEO friendly (meta tags, Open Graph, Twitter Card)

📌 Ghi chú

Code viết đơn giản, dễ chỉnh sửa cho người mới.

Có thể mở rộng thêm blog, trang chi tiết dự án, hoặc CMS nếu muốn.
