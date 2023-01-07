import React from "react";

const BlogPostHeader = (props) => {
    
    return (
        <div className="d-flex justify-content-between col-9 my-4">
            
            <span className="display-6 fw-bold text-dark">Your Blogpost</span>
            <button
                className="btn btn-md text-white bg-success rounded-pill mt-2"
                onClick={props.onButtonClick}
            > 
                Write a Story
                {props.title}
            </button>
        </div>
    )
}

export default BlogPostHeader;