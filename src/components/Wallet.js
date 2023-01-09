import React from "react";
const iconPath = process.env.PUBLIC_URL + '/assets/';

const Wallet = (props) => {
    
    return (
        <div className="row mx-0">

            <div className="col-7">
                <div className="mb-4 mt-1 py-2 border-bottom border-2" style={{color: 'black'}}>
                    <span style={{color: ''}} className="me-4 mt-4 border-bottom py-2">Wallet</span>
                    <span style={{color: ''}} className="mx-4 mt-4">Account</span>
                    <span style={{color: ''}} className="mx-4 mt-4">Help</span>
                </div>

                <div className="text-center mx-5">
                    <div className="mb-5 py-2 d-flex justify-content-around" style={{color: 'black'}}>
                        <span style={{color: ''}} className="me-4 border-bottom py-2 fw-bold">Balances</span>
                        <span style={{color: 'grey'}} className="mx-4">Collectibles</span>
                    </div>

                    <p style={{color: 'black'}}  className="h2 fw-bold">$250.89 USD</p>
                    <p style={{color: 'grey'}}  className="mb-4">Available Balance</p>

                    <div className="row d-flex justify-content-center">
                        <span className="col-2 my-4" style={{color: 'black'}}>
                            <div class="btn btn-primary btn-sm" style={{backgroundColor: ''}} >
                                <img src={`${iconPath}senddd-removebg-preview.png`} alt="Pics" style={{width: '25px'}} />
                            </div> <br/>
                            Send
                        </span>
                        <span className="col-2 my-4" style={{color: 'black'}}>
                            <div class="btn btn-primary btn-sm" style={{backgroundColor: ''}} >
                                <img src={`${iconPath}download-removebg-preview.png`} alt="Pics" style={{width: '25px'}} />
                            </div> <br/>
                            Receive
                        </span>
                    </div>
                    
                    <div className="row d-flex justify-content-center">
                        <span className="col-5 my-4 py-2" style={{color: 'black'}}>
                            <p style={{color: 'grey'}}  className="border-bottom pb-3">Your Portfolio</p>
                            <div style={{color: ''}} className="row d-flex justify-content-center me-4 border-bottom">
                                <img className="col-1" src={`${iconPath}person2-removebg-preview.png`} alt="Pics" style={{width: '70px'}} />
                                <span style={{color: 'Black'}}  className="col-1">
                                    <span className="fw-bold">BITCOIN</span> <br/>
                                    <small style={{color: 'grey'}}  className="mb-4">$2.00</small>
                                </span>
                            </div>
                        </span>
                        <span className="col-5 my-4 py-2" style={{color: 'black'}}>
                            <p style={{color: 'grey'}}  className="border-bottom pb-3">Token Balance</p>
                            <div style={{color: ''}} className="me-4 border-bottom">
                                <span style={{color: 'Black'}}  className="mb-4">
                                <span className="fw-bold">120.343 BITCOIN</span> <br/>
                                    <small style={{color: 'grey'}}  className="mb-4">+$123,456,789 USD</small>
                                </span>
                            </div>
                        </span>
                    </div>
                    
                </div>
            </div>


            <div className="col-4">
                <div className="rounded mb-5 me-3 mt-1 d-flex justify-content-end" style={{backgroundColor: 'rgb(242, 242, 222)', width: '135px', marginLeft: '235px'}}>
                    <img className="mt-2" src={`${iconPath}person2-removebg-preview.png`} alt="Pics" style={{width: '25px', height: '25px'}} />
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Jeff Tank
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Settings</button></li>
                            <hr/>
                            <li><button class="dropdown-item" type="button">Logout</button></li>
                        </ul>
                    </div>
                </div>

                <div className="row mx-3 align-items-center bg-primary text-center text-white rounded fw-bold align-middle" style={{height: '350px'}}>
                    <p className="col">ADS</p>
                </div>

                <div className="border mx-3 rounded p-2 fw-bold align-middle mt-4" style={{height: '350px'}}>
                    <p className="fw-bold" style={{color: 'black'}}>Recent Activity</p>
                    <hr/>
                    <div style={{color: ''}} className="row d-flex justify-content-between">
                            <span style={{width: '30px', height: '30px', backgroundColor: 'rgb(209, 202, 202)'}} className="rounded-circle col-3 ms-2"></span>
                        <span className="col-8">
                            <span style={{color: ''}}  className="">
                                <small style={{color: 'black'}} className="fw-bold">Access key added</small> <br/>
                                <small style={{color: 'grey'}}  className="mb-4">for jeff.tank</small>
                            </span>
                        </span>
                        <small className="col-1 me-3" style={{color: 'grey'}}>1d</small>
                    </div>
                    <hr/>
                    <div style={{color: ''}} className="row d-flex justify-content-between">
                        <span style={{width: '30px', height: '30px', backgroundColor: 'rgb(209, 202, 202)'}} className="rounded-circle col-3 ms-2"></span>
                        <span className="col-8">
                            <span style={{color: ''}}  className="">
                                <small style={{color: 'black'}} className="fw-bold">New account creaated</small> <br/>
                                <small style={{color: 'grey'}}  className="mb-4">account jeff.tank</small>
                            </span>
                        </span>
                        <small className="col-1 me-3" style={{color: 'grey'}}>1d</small>
                    </div>
                    <hr/>
                    <div style={{color: ''}} className="row d-flex justify-content-between">
                        <span style={{width: '30px', height: '30px', backgroundColor: 'rgb(209, 202, 202)'}} className="rounded-circle col-1 ms-2"></span>
                        <span className="col-6">
                            <span style={{color: ''}}  className="">
                                <small style={{color: 'black'}} className="fw-bold">Received BITCOIN</small> <br/>
                                <small style={{color: 'grey'}}  className="mb-4">from rowland</small>
                            </span>
                        </span>
                        <small className="col-4" style={{color: 'grey'}}>
                            <span className="text-success">+200 BITCOIN</span> 
                            <p className="ps-4 ms-5">1d</p>
                        </small>
                    </div>
                    <hr/>
                </div>
            </div>

        </div>

    )
}

export default Wallet;