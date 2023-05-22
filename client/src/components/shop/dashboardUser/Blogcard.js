import React from 'react';

const Blogcard = () => {
    return (
        <div>
            <div className="blog-card">
      <div className="card-image">
        <img src="" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia
        </p>
        <a to="/blog/:id" className="button">
          Read More
        </a>
      </div>
    </div>
        </div>
    );
};

export default  Blogcard;