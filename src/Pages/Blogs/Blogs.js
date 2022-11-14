import React from 'react';
import { DynamicTittle } from '../../Component/SharedCompo/DynamicTittle/DynamicTittle';

const Blogs = () => {
    return (
        <div>
        <DynamicTittle title='Blogs'></DynamicTittle>
        <div className="card w-10/12 my-8 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">1. Difference between sql and nosql</h2>
          <p> => SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
        </div>
      </div>
        <div className="card w-10/12 my-8 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">2. What is JWT, and how does it work?</h2>
          <p> => JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
        </div>
      </div>
        <div className="card w-10/12 my-8 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">3. What is the difference between javascript and NodeJS?</h2>
          <p> => JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
        </div>
      </div>
        <div className="card w-10/12 my-8 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">4. How does NodeJS handle multiple requests at the same time?</h2>
          <p> => NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
        </div>
      </div>
        </div>
    );
};

export default Blogs;