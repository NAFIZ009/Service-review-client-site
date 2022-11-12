import React, { useContext,useState } from 'react';
import { ContextAuth } from '../../Context/AuthContext';

const OwnReview = ({setReviews,service}) => {
    const {user}=useContext(ContextAuth);
    const [reviewInfo,setReviewInfo]=useState({
      user:{
        id:user.uid,
        name:user.displayName,
        photo:user.photoURL
      },
      email:user.email,
        service:'',
        review:''
    });
    const selectHandler=e=>{
        const service=e.target.value;
        setReviewInfo({...reviewInfo,service:service});
    }
    
    const textAreaHandler=e=>{
        setReviewInfo({...reviewInfo,review:e.target.value});
    };

    const reviewBtn=(e)=>{
      e.preventDefault();
      fetch("http://localhost:5000/reviews",{
        method:"POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(reviewInfo)
      })
      .then((res)=>{
        console.log(res)
      })
      setReviews(prev=>[...prev,reviewInfo]);
      e.target.reset();
    }
    return (
        <>
      <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
            <div className="card-title">
            <h2 className='text-3xl'>Give Your Review</h2>
            </div>
            <h3>Which Service Do You Want To GIve Review?</h3>
            <form onSubmit={reviewBtn}>
            <select onChange={selectHandler} className="select select-accent w-full max-w-xs">
            <option disabled selected>Service</option>
            {
              service&&service.map((ser,i)=><option key={i} value={ser.name}>{ser.name}</option>)
            }
          </select>
            <textarea onChange={textAreaHandler} className='w-full mt-2 p-5 text-lg' placeholder='Give Your Review Here'></textarea>
              <div className="card-actions justify-end mt-5">
                <button type='submit' className="btn btn-primary">Give Your Review</button>
              </div>
              </form>
            </div>
          </div>
</>
    );
};

export default OwnReview;