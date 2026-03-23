import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../../common/Card';

const GoldPriceCard = ({ karat, price, change }) => {
  const isPositive = change >= 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-textGray text-sm mb-1">Gold</p>
          <h3 className="text-gold text-2xl font-bold">{karat}</h3>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 mr-1" />
          ) : (
            <TrendingDown className="w-5 h-5 mr-1" />
          )}
          <span className="text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold text-slate">${price.toFixed(2)}</p>
        <p className="text-textGray text-sm mt-1">per ounce</p>
      </div>
    </Card>
  );
};

export default GoldPriceCard;
