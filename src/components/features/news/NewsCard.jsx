import React from 'react';
import Card from '../../common/Card';

const NewsCard = ({ article }) => {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/3">
          <div className="relative rounded-xl overflow-hidden h-48 md:h-full">
            <img
              src={article.image || 'https://images.unsplash.com/photo-1611941467906-c551f8d4ff09?w=400&q=80'}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {article.featured && (
              <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                featured
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-sm px-3 py-1 rounded-full ${
                article.category === 'News' ? 'badge-blue' :
                article.category === 'Analysis' ? 'badge-red' :
                'badge-green'
              }`}>
                {article.category}
              </span>
            </div>

            <h3 className="text-slate text-xl font-bold mb-3 hover:text-gold transition-colors cursor-pointer">
              {article.title}
            </h3>

            <p className="text-textGray mb-4 line-clamp-2">
              {article.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-textGray text-sm">
              <span className="font-medium">{article.source}</span>
              <span className="mx-2">•</span>
              <span>{article.time}</span>
            </div>
            <button className="text-gold hover:text-gold-dark font-medium text-sm transition-colors">
              Read Full Article
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
