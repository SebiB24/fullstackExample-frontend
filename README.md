# 💼 Employee Management System - Frontend (Angular)

An Angular application that provides a responsive UI to manage employees by consuming the Employee Management System backend API.

---

## Link to Backend app repository

https://github.com/SebiB24/fullstackExample-backend

---

## 🚀 Features

- Employee cards with responsive design  
- Modal-based CRUD operations  
- Search functionality  
- Bootstrap styling  
- Font Awesome icons  
- API integration with async/await

---

## 🧰 Tech Stack

- **Angular 15+**
- **TypeScript**
- **Bootstrap 4**
- **Font Awesome**
- **RxJS**

---

## 📁 Project Structure

```
src/
├── app/
│   ├── employee.service.ts     # Handles API interactions
│   ├── employee.ts             # Employee interface
│   ├── app.component.*         # Root component files
│   └── app.routes.ts           # Routing definitions
├── environments/               # Environment configs
└── assets/                     # Static assets
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js (v16 or later)
- Angular CLI (`npm install -g @angular/cli`)
- Backend API running (Spring Boot app)

### 2. Install Dependencies

```bash
npm install
```

---

## 🔧 Configure API URL

If your backend runs on a different port, update `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:8080'
};
```

---

## ▶️ Run the Application

```bash
ng serve
```

Open your browser and navigate to:

```
http://localhost:4200
```

---

## 📦 Core Dependencies

- `@angular/core`  
- `@angular/common`  
- `@angular/forms`  
- `@angular/router`  
- `bootstrap`  
- `font-awesome`  
- `rxjs`

---

## 🛠️ Development Features

- Template-driven Angular Forms  
- HTTP Client with RxJS observables  
- Async/Await for better readability  
- Bootstrap modals for user interactions  

---

## UI Screenshots

![image](https://github.com/user-attachments/assets/505a382a-a4e2-4c9f-9ebf-cba59f9e915d)

![image](https://github.com/user-attachments/assets/5275c727-0cba-4ac4-b58a-da9bcf9946e8)

![image](https://github.com/user-attachments/assets/6e495a34-fce6-467a-bfc9-a0d6e3918430)

![image](https://github.com/user-attachments/assets/80442ecb-158d-4615-acc0-cac04d5d2114)

![image](https://github.com/user-attachments/assets/a9441105-3989-4b18-ab81-71e0f758d303)





