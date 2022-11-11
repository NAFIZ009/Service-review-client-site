import React from 'react';

const Review = ({reviewDetails}) => {
    return (
        <div>
        <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <div className="userDetails flex ">
            <img src="" alt="" className='rounded w-30'/>
            <h2 className="card-title">{}</h2>
          </div>
          
          <p className='text-gray-600'>{reviewDetails}</p>
        </div>
      </div>
        </div>
    );
};

export default Review;