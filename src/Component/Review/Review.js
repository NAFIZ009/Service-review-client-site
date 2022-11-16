import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const Review = ({reviewDetails,setReviews,reviews,myreviews=false}) => {
  const [updateBtnTriggered,setUpdateBtnTriggered]=useState(false);
  const dltBtn=(id)=>{
    fetch(`https://video-walah-server-nafiz009.vercel.app/reviews/${id}`,{
      method:'Delete'
    })
    .then(res=>{
      setReviews(prev=>{
        const x=prev.filter(revi=>revi._id!==id);
        return x;
      });
    })
  }
  const updateBtn=(e,id)=>{
    e.preventDefault();
    const updatedValue=e.target.textarea.value;
    console.log(updatedValue)
     fetch(`https://video-walah-server-nafiz009.vercel.app/reviews/${id}`,
     {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rev: updatedValue })
  }
    )
    .then(res=>{
      setReviews(prev=>{
        const updatedReview=prev.find(revi=>revi._id===id);
        updatedReview.review=updatedValue;
        return [...prev]
      });
      setUpdateBtnTriggered(false);
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
          
          
          {
            updateBtnTriggered?<form onSubmit={(e)=>updateBtn(e,reviewDetails._id)} className='flex-col sm:flex-row content-center gap-4'>
            <textarea name="textarea" id="" className='w-full sm:w-10/12 h-20 p-5 text-lg ' placeholder='Update Your Review'></textarea>
            <button type="submit" className='btn btn-outline-primary md:ml-3 '>Update</button>
          </form>
          :
          <p className='text-xl text-white'><span className='text-black underline'>Review :-</span>  <br />{reviewDetails.review}.</p>
        }
          {
            myreviews&&<div className="card-actions justify-end">
              <button onClick={()=>dltBtn(reviewDetails._id)} className="btn btn-primary">Delete</button>
              <button onClick={()=>setUpdateBtnTriggered(true)} disabled={updateBtnTriggered?true:false} className="btn btn-primary">Update</button>
           </div>
          }
        </div>
      }
      </div>
        </div>
    );
};

export default Review;

