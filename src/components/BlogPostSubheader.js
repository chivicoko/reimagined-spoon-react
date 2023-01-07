import React from "react";

const BlogPostSubheader = (props) => {
    
    return (
        <div className="border-bottom border-muted col-9">
            <div className="d-flex justify-content-between col-4 my-2">
                <span className="text-dark">Drafts</span>
                <span className="text-dark">Published</span>
                <span className="text-dark">Responses</span>
            </div>
        </div>
    )
}

export default BlogPostSubheader;