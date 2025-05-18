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

## ✅ License

This project is open-source and available for educational and commercial use.
