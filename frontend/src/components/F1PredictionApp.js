// src/components/F1PredictionApp.js
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const F1PredictionApp = () => {
  const [prediction, setPrediction] = useState(null);
  const [plotData, setPlotData] = useState([]);
  const [formData, setFormData] = useState({
    experience: '',
    track_history: '',
    recent_form: '',
    grid: ''
  });

  useEffect(() => {
    fetch('/visualization')
      .then(res => res.json())
      .then(data => {
        const transformedData = data.map(point => ({
          grid: point.grid,
          position: point.position
        }));
        setPlotData(transformedData);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setPrediction(data.predicted_position);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>F1 Race Position Predictor</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="number"
              placeholder="Driver Experience (races)"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            />
            <Input
              type="number"
              step="0.1"
              placeholder="Track History (avg position)"
              value={formData.track_history}
              onChange={(e) => setFormData({...formData, track_history: e.target.value})}
            />
            <Input
              type="number"
              step="0.1"
              placeholder="Recent Form (avg points)"
              value={formData.recent_form}
              onChange={(e) => setFormData({...formData, recent_form: e.target.value})}
            />
            <Input
              type="number"
              placeholder="Grid Position"
              value={formData.grid}
              onChange={(e) => setFormData({...formData, grid: e.target.value})}
            />
            <Button type="submit" className="w-full">Predict Position</Button>
          </form>
          
          {prediction && (
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold">Predicted Finish Position</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {prediction.toFixed(1)}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grid vs Final Position Correlation</CardTitle>
        </CardHeader>
        <CardContent className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis 
                type="number" 
                dataKey="grid" 
                name="Starting Position" 
                unit=""
                domain={[0, 20]}
              />
              <YAxis 
                type="number" 
                dataKey="position" 
                name="Final Position" 
                unit=""
                domain={[0, 20]}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ payload, label }) => {
                  if (payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border rounded shadow">
                        <p className="text-sm">Start: P{payload[0].value}</p>
                        <p className="text-sm">Finish: P{payload[0].payload.position}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter 
                name="Position Data" 
                data={plotData} 
                fill="#2563eb"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default F1PredictionApp;