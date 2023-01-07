import React from "react";
const iconPath = process.env.PUBLIC_URL + '/assets/';

const BlogSideBar = (props) => {
    
    return (
        

        <div className="col-md-3 ml-0 mt-3">
            <div class="form-outline mb-4 mt-3">
                {/* <i className="bi bi-search"></i> */}
                <input type="search" id="form1" class="form-control rounded-pill" placeholder="Search for blog post..." aria-label="Search" />
            </div>

            <h6 className="mb-3">Staff Content</h6>

            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5">Real talk from UX Researcher</p>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5">Real talk from UX Researcher</p>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5">Real talk from UX Researcher</p>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5 mb-3">Real talk from UX Researcher</p>
                </div>
            </div>

            <small className="text-success">See the full list</small>

            <hr/>

            <h6 className="mb-3 mt-5">Trending Content</h6>

            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5">Real talk from UX Researcher</p>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5">Real talk from UX Researcher</p>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5">Real talk from UX Researcher</p>
                </div>
            </div>
            <div className="d-flex justify-content-between my-2">
                <div>
                    <div className="d-flex justify-content-between col-7 mb-0">
                        <span className="text-dark"><img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '40px'}} /></span>
                        <span className="text-dark mt-2"> <small>James Tom</small> </span>
                    </div>
                    <p className="h6 mb-1 ml-5 mb-3">Real talk from UX Researcher</p>
                </div>
            </div>

            <small className="text-success">See the full list</small>

                
            <div className="border-bottom border-muted col-9 my-5 me-5">
                <div className="d-flex justify-content-between my-2">
                    <span className="text-dark">
                        
                        <div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-dark bg-dark rounded-pill" style={{width: '50px', height: '50px'}}>
                                    {/* <img src={`${iconPath}logo192.png`} alt="Pics" style={{width: '50px'}} /> */}
                                </span>
                                <button
                                    style={{backgroundColor: '#dfe2e9'}}
                                    className="btn btn-sm text-primary bg-muted rounded-pill mt-2"
                                    onClick={props.onButtonClick}
                                > 
                                    <small>PREMIER</small>
                                    {props.title}
                                </button>
                            </div>
                        </div>

                        Decrypt
                        <p className="h4 fw-bold mb-1">Full-stack Web3 Application <br/> Software Engineer</p> <br/>
                        <small>Marketing. Full-time. NY,Remote. &copy;$80k-$100k<br/></small> <br/>

                        <small style={{backgroundColor: '#dfe2e9'}} className="rounded py-1 px-2 me-1">ETH</small>
                        <small style={{backgroundColor: '#dfe2e9'}} className="rounded py-1 px-2 mx-1">Fullstack</small>
                        <small style={{backgroundColor: '#dfe2e9'}} className="rounded py-1 px-2 mx-1">TypeScript</small>
                        <small style={{backgroundColor: '#dfe2e9'}} className="rounded py-1 px-2 mx-1">JavaScript</small>
                        <small style={{backgroundColor: '#dfe2e9'}} className="rounded py-1 px-2 mx-1">Node</small>
                        <h6 className="text-muted mt-4">Today</h6>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogSideBar;