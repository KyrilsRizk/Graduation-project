import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PriceChart = ({ data, dataKey = 'price', xAxisKey, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {title && <h3 className="text-slate text-xl font-bold mb-6">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#626670"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#626670"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${value}`}
            domain={['dataMin - 50', 'dataMax + 50']}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
            }}
            formatter={(value) => [`$${value}`, 'Price']}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke="#C9A961" 
            strokeWidth={2}
            dot={{ fill: '#C9A961', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
