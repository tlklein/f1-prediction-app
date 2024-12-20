![F1 Car with Drivers](https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2024/editorial/f1-2025-schedule-article-cover-wide.jpg)

# Helios Prototype - F1 Race Prediction Application

Helios is a simple and intuitive application designed to predict and display Formula 1 (F1) data by processing and analyzing multiple CSV files.

---

## What Is F1 Anyway?

Formula 1 (F1) is the pinnacle of single-seater auto racing, governed by the Fédération Internationale de l'Automobile (FIA) and managed by the Formula One Group. Since its inception in 1950, the FIA Formula One World Championship has been one of the most prestigious racing series in the world. The "formula" refers to the strict set of rules to which all participants and their cars must adhere. Each season comprises multiple races called Grands Prix, hosted on custom circuits and public roads across the globe.  
To learn more, visit the [Beginner's Guide to F1](https://www.formula1.com/en/latest/tags/beginner-s-guide.7szZSRQkywApBCsTz1sDwg).

---

## How to Deploy

### 1. Clone the Repository
```bash
git clone https://github.com/tlklein/helios.git
```

### 2. Install Dependencies
```bash
npm install
npm install next
```

### 3. Configure Environment Variables
- Copy the `env.example.txt` file to `.env.local`:
  ```bash
  cp env.example.txt .env.local
  ```
- Edit the `.env.local` file to add the required environment variables. Leave `env.example.txt` unchanged.
  - Refer to these resources for setup:
    - [Uploadthing](https://uploadthing.com/)
    - [NextAuth.js](https://next-auth.js.org/configuration/options)
    - [GitHub Developer Settings](https://github.com/settings/developers)

### 4. Navigate to the Frontend Folder
```bash
cd frontend
```

### 5. Start the Development Server
```bash
npm run dev
```

### 6. Access the Application
- Open your browser and navigate to:  
  [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/13)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Components**: [Shadcn-ui](https://ui.shadcn.com)
- **Schema Validation**: [Zod](https://zod.dev)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs)
- **Authentication**: [Auth.js](https://authjs.dev/)
- **File Uploading**: [Uploadthing](https://uploadthing.com)
- **Linting**: [ESLint](https://eslint.org)
- **Pre-commit Hooks**: [Husky](https://typicode.github.io/husky/)
- **Code Formatting**: [Prettier](https://prettier.io)

### Backend
- **Machine Learning**: [Scikit-learn](https://scikit-learn.org/stable/index.html)
- **F1 Dataset**: [Kaggle](https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020/data)
- **CSV Parsing**: [Papa Parse](https://www.papaparse.com/)

---

Feel free to contribute, report issues, or explore the exciting world of F1 through Helios!
