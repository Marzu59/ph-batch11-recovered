import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    title,
    image_url,
    author,
    details,
    rating,
    total_view,
    tags,
    id 
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img src={author?.img} alt="Author" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-xs text-gray-500">{format(new Date(author?.published_date), "yyyy-MM-dd")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-ghost btn-sm">🔖</button>
          <button className="btn btn-ghost btn-sm">🔗</button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={image_url} alt="News" className="w-full rounded-md" />
      </figure>

      {/* Details */}
      <div className="px-4 py-2 text-sm text-gray-600">
        {details.slice(0, 200)}...
        <Link to={`/news-details/${id}`} className="text-primary cursor-pointer font-semibold"> Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-4 border-t mt-2 text-sm text-gray-500">
        <div className="flex items-center text-orange-500 gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? 'text-orange-500' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-gray-800 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
