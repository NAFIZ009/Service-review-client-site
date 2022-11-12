import React from 'react';

const Review = ({reviewDetails,setReviews,reviews,myreviews=false}) => {

  const dltBtn=(id)=>{
    fetch(`http://localhost:5000/reviews/${id}`,{
      method:'Delete'
    })
    .then(res=>{
      setReviews(prev=>{
        const x=prev.filter(revi=>revi._id!==id);
        return x;
      });
    })
  }


    return (
        <div>
        <div className="card w-full bg-primary text-primary-content">
        {
          <div className="card-body">
          <div className="userDetails flex flex-col">
          <div className='flex gap-2 content-center'>
          <div className="avatar">
        <div className="w-10 rounded-full">
        <img src={reviewDetails.user.photo} alt="" />
        </div>
        </div>
          
          <h1 className="text-2xl text-gray-700">{reviewDetails.user.name}</h1>
          </div>
            
            <h2 className="text-lg text-gray-600">@:-{reviewDetails.email}</h2>
            <h2 className="text-sm text-bold">Service Name :- {reviewDetails.service}</h2>
          </div>
          
          <p className='text-xl text-white'><span className='text-black underline'>Review :-</span>  <br />{reviewDetails.review}.</p>
          {
            myreviews&&<div className="card-actions justify-end">
              <button onClick={()=>dltBtn(reviewDetails._id)} className="btn btn-primary">Delete</button>
           </div>
          }
        </div>
      }
      </div>
        </div>
    );
};

export default Review;