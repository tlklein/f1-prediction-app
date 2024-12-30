
![F1 Car with Drivers](https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2024/editorial/f1-2025-schedule-article-cover-wide.jpg)

# F1 Prediction App

Formula 1 race prediction application that processes historical data to predict race positions and visualize trends.

## Setup

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Data Requirements

Place your F1 CSV files in `backend/data/`:
- You can find some on kaggle: https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020

## Features
- Race position predictions using machine learning
- Interactive data visualization
- Historical trend analysis

