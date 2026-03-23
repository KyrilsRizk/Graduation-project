import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import Card from '../../common/Card';

const AlertCard = ({ alert, onEdit, onDelete }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-slate text-lg font-bold mb-1">{alert.type}</h3>
          <p className="text-textGray text-sm">Created: {alert.createdDate}</p>
        </div>
        <span className="badge-green">{alert.status}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-textGray text-sm mb-1">Target Price</p>
          <p className="text-gold text-xl font-bold">${alert.targetPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-textGray text-sm mb-1">Current Price</p>
          <p className="text-slate text-xl font-bold">${alert.currentPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-textGray text-sm">Notify via: {alert.notifyVia}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onEdit(alert)}
          className="flex-1 flex items-center justify-center space-x-2 bg-beige hover:bg-beige-dark text-textGray py-2 rounded-lg transition-colors"
        >
          <Edit2 className="w-4 h-4" />
          <span>Edit</span>
        </button>
        <button
          onClick={() => onDelete(alert.id)}
          className="flex-1 flex items-center justify-center space-x-2 bg-beige hover:bg-beige-dark text-textGray py-2 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      </div>
    </Card>
  );
};

export default AlertCard;
