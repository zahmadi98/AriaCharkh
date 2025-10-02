# 🚴 AriaCharkh

[![Stars](https://img.shields.io/github/stars/zahmadi98/AriaCharkh?style=flat-square)](https://github.com/zahmadi98/AriaCharkh/stargazers)
[![Forks](https://img.shields.io/github/forks/zahmadi98/AriaCharkh?style=flat-square)](https://github.com/zahmadi98/AriaCharkh/network/members)
[![Issues](https://img.shields.io/github/issues/zahmadi98/AriaCharkh?style=flat-square)](https://github.com/zahmadi98/AriaCharkh/issues)
[![License](https://img.shields.io/github/license/zahmadi98/AriaCharkh?style=flat-square)](https://github.com/zahmadi98/AriaCharkh/blob/main/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/zahmadi98/AriaCharkh?style=flat-square)](https://github.com/zahmadi98/AriaCharkh/commits)

یک اسکلت سریع و مینیمال برای پروژه‌های فرانت‌اند — ساخته‌شده با **React + Vite + Tailwind**. مناسب برای شروع SPAها یا صفحات مستقل.

---

## 🚀 Highlights
- بوت‌استرپ سریع با Vite (HMR)
- طراحی utility-first با Tailwind CSS
- ساختار تمیز و قابل توسعه برای کامپوننت‌ها، صفحات و هوک‌ها
- آمادهٔ توسعه محلی و دیپلوی روی پلتفرم‌های محبوب (Vercel / Netlify)

---

## 🧰 Tech stack
- React (v18+)
- Vite
- Tailwind CSS
- PostCSS
- (اختیاری) ESLint / Prettier

---

## ⚡ Quick start

```bash
# کلون کردن مخزن
git clone https://github.com/zahmadi98/AriaCharkh.git
cd AriaCharkh

# نصب وابستگی‌ها (npm)
npm install

# اجرای محیط توسعه (HMR)
npm run dev

# ساخت production
npm run build

# پیش‌نمایش build
npm run preview```
---

## 🗂️ پیشنهادی ساختار پروژه
/src
  ├─ assets/
  ├─ components/
  ├─ layouts/
  ├─ pages/
  ├─ hooks/
  ├─ utils/
  ├─ App.jsx
  └─ main.jsx
index.html
package.json
tailwind.config.js
vite.config.js
postcss.config.js
---

## 📦 اسکریپت‌های پیشنهادی (package.json)
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .js,.jsx",
    "format": "prettier --write ."
  }
}
---

## 🛠️ نکات پیکربندی و دیپلوی

در tailwind.config.js مطمئن شو content شامل ./src/**/*.{js,jsx,ts,tsx,html} باشه تا CSS اضافی حذف شه.

برای دیپلوی ساده از Vercel یا Netlify استفاده کن؛ هر دو با Vite سازگارند.

متغیرهای حساس (API keys) رو در Secrets پلتفرم دیپلوی نگه دار.
---

## 🧪 تست و CI (پیشنهاد)

اضافه کردن GitHub Actions برای lint و build باعث می‌شود هر PR قبل از merge چک شود.

نمونه workflow: اجرای npm ci, npm run lint, npm run build.
---

## 🤝 مشارکت (Contributing)

ممنون از علاقه‌ات به مشارکت! اینجا یک روند پیشنهادی ساده برای همکاری و ارسال تغییرات آمده:

مخزن را Fork کن.

از شاخهٔ main/master یک شاخهٔ محلی جدید بساز:
git checkout -b feat/your-feature

کدت را اضافه/تغییر بده و کامیت کن:
git add .
git commit -m "feat: توضیح مختصر تغییرات"

شاخه را به Fork خود پوش کن:
git push origin feat/your-feature

از صفحهٔ GitHub روی مخزن اصلی یک Pull Request باز کن.
