import React from "react";
const iconPath = process.env.PUBLIC_URL + '/assets/';

const BlogCard = (props) => {
    
    return (
        <div className="border-bottom border-muted col-9 mt-3">
            <div className="d-flex justify-content-between my-2">
                <span className="text-dark">
                    
                    <div>
                        <div className="d-flex justify-content-between col-5 mb-2">
                            <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '50px'}} /></span>
                            <span>
                                <span className="text-dark"> <small>James Tom <br/> Oct 19 &nbsp; 6min read</small> </span>
                            </span>
                        </div>
                    </div>


                    <p className="fw-bold mb-1">How to Mint an NFT in Solana</p>
                    <p>We will learn how to build an NFT manually in Solana. <br/> 
                        To follow this post, it is necessary to use the Metaplix CLI. If <br/>
                        you have an alternative, I would be grateful if you tell me...
                    </p>
                </span>
                <span className="text-dark"><img src={`${iconPath}pic-placeholder.jpg`} alt="Pics" style={{width: '200px', height: '160px'}} /></span>
            </div>
        </div>
    )
}

export default BlogCard;