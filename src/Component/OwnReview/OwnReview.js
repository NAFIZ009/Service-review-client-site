import React, { useContext,useEffect,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContextAuth } from '../../Context/AuthContext';

const OwnReview = () => {
    const location=useLocation();
    const [servicess,setServicess]=useState([]);
    const {user,loading}=useContext(ContextAuth);
    const [reviewInfo,setReviewInfo]=useState({
        user:{
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
        },
        service:'',
        review:''
    });
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServicess(data));
    },[]);
    const selectHandler=e=>{
        const service=e.target.value;
        setReviewInfo({...reviewInfo,service:service});
    }
    
    const textAreaHandler=e=>{
        setReviewInfo({...reviewInfo,review:e.target.value});
    };

    const reviewBtn=()=>{
        console.log(reviewInfo);
    }
    return (
        <>
        {
            !loading&&user.uid?<div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
            <div className="card-title">
            <h2 className='text-3xl'>Give Your Review</h2>
            </div>
            <h3>Which Service Do You Want To GIve Review?</h3>
            <select onChange={selectHandler} className="select select-accent w-full max-w-xs">
            <option disabled selected>Service</option>
            {
              servicess.map((ser,i)=><option key={i} value={ser.name}>{ser.name}</option>)
            }
          </select>
            <textarea onChange={textAreaHandler} className='w-full p-5 text-lg' placeholder='Give Your Review Here'></textarea>
              <div className="card-actions justify-end mt-5">
                <button onClick={reviewBtn} className="btn btn-primary">Give Your Review</button>
              </div>
            </div>
          </div>
          :
          <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
          <div className="card-title">
          <h2 className='text-3xl'>Give Your Review</h2>
          </div>
            <textarea disabled className='border border-red-600 w-full p-5 text-xl' placeholder='Please LogIn First'></textarea>
            <div className="card-actions justify-end">
              <Link to='/login' state={{from:location}} className="btn btn-primary">LogIn Now</Link>
            </div>
          </div>
        </div>
        }
        


</>
    );
};

export default OwnReview;