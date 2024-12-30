from flask import Flask, jsonify, request
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import plotly.express as px

app = Flask(__name__)

class F1Predictor:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100)
        
    def load_data(self):
        self.races = pd.read_csv('data/races.csv')
        self.results = pd.read_csv('data/results.csv')
        self.drivers = pd.read_csv('data/drivers.csv')
        
    def prepare_features(self):
        df = self.results.merge(self.races, on='raceId')
        df = df.merge(self.drivers, on='driverId')
        
        df['experience'] = df.groupby('driverId')['raceId'].transform('count')
        df['track_history'] = df.groupby(['driverId', 'circuitId'])['position'].transform('mean')
        df['recent_form'] = df.groupby('driverId')['points'].transform(lambda x: x.rolling(3, min_periods=1).mean())
        
        return df[['experience', 'track_history', 'recent_form', 'grid', 'position']]
    
    def train_model(self):
        data = self.prepare_features()
        X = data.drop('position', axis=1)
        y = data['position']
        self.model.fit(X, y)
    
    def predict(self, features):
        return self.model.predict(features)

    def generate_visualization(self):
        data = self.prepare_features()
        # Return data in format compatible with Recharts
        return [{'grid': row['grid'], 'position': row['position']} 
                for _, row in data.iterrows()]

@app.route('/train', methods=['POST'])
def train():
    predictor = F1Predictor()
    predictor.load_data()
    predictor.train_model()
    return jsonify({"status": "success"})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = pd.DataFrame([data])
    predictor = F1Predictor()
    prediction = predictor.predict(features)
    return jsonify({"predicted_position": float(prediction[0])})

@app.route('/visualization', methods=['GET'])
def get_visualization():
    predictor = F1Predictor()
    predictor.load_data()
    return jsonify(predictor.generate_visualization())

if __name__ == '__main__':
    app.run(debug=True)