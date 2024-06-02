<h1 align="center">Welcome to DALL-E</h1>
<p align="center">
<!--   <a href="https://github.com/vihao1802/Website-ClassIn/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://github.com/vihao1802/Website-ClassIn/watchers">
    <img alt="GitHub" src="https://img.shields.io/github/watchers/vihao1802/Website-Classin" target="_blank" />
  </a> -->
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a>&nbsp
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/></a>&nbsp
  <br>
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/></a>&nbsp
  <br>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></a>&nbsp 
</p>

> `DALL_E Clone Website` that provides a minimal UI with generated AI tool.

![image](https://github.com/vihao1802/dalle_clone/assets/108573121/ca894ff0-1611-4f3b-8ef9-0d35434a6bfa)


<!-- 
<img src="/docs/screenshot.png" width="100%">

## Render Deployment

### Frontend: <a href="https://website-classin-hu7l.onrender.com/" target="_blank">https://website-classin-hu7l.onrender.com/</a>

### Backend: <a href="https://website-classin.onrender.com" target="_blank">https://website-classin.onrender.com</a>
-->


<!-- GETTING STARTED -->

## 🎯 Getting Started

### 💎 Prerequisites

- <p><a href="https://nodejs.org/en">Nodejs</a></p>
- <p><a href="https://www.npmjs.com/">npm</a> (normally comes with Node.js)</p>

### ⚙️ Installation

1. Clone the repo

```sh
git clone https://github.com/vihao1802/dalle_clone
```
2. From `root` directory, move to `frontend`

```
cd frontend
```

3. Install all required packages in `packages.json`

```
npm i
```

4. From `root` directory, move to `backend`

```
cd backend
```

5. Install all required packages in `packages.json`

```
npm i
```

8. Create file `.env.local` in folder `frontend` with format:

```env
REACT_APP_BASE_URL=http://localhost:8000/api
REACT_APP_WEBSOCKET_URL=ws://localhost:8000/api/ws
```

9. Create file `.env` in folder `backend` with format:

```env
URL_DATABASE="sqlite:///./classin_database.db"
PORT=8000
DOMAIN_URL=http://localhost:8000
DOMAIN_CLIENT=http:localhost:3000
JWT_ALGORITHM=HS256
JWT_SECRET=#use_generate_UUID_tool_for_this
EMAIL=#email-for-upload-file-feature
PASSWORD_EMAIL=#password-email-for-upload-file-feature
SERVICE_ACCOUNT_FILE=#use-absolute-path-to-backend/config/xenon-timer.json_file
```

## 🚀 Usage

⚠️ Use two terminals for running this web application

### Frontend(First termnial):

- From `root` directory

```
cd frontend
```

- Run `frontend`

```
npm start
```

### Backend(Second termnial):

- From `root` directory

```
cd backend
```

- Run `backend`

```
uvicorn main:app --reload
```

## ✨ Code Contributors
<a href="https://github.com/vihao1802/dalle_clone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vihao1802/dalle_clone" />
</a>

## 📝 License

Copyright © 2024 [Tran Vi Hao](https://github.com/vihao1802).<br />
This project is [MIT](https://github.com/vihao1802/Website-ClassIn/blob/main/LICENSE) licensed.
