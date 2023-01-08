import React from "react";
const iconPath = process.env.PUBLIC_URL + '/assets/';

const AccountSettings = (props) => {
    
    return (
        <div className="col-7 mb-5 mt-2 offset-1">
            <h2 className="fw-bold my-4">
                <img src={`${iconPath}settings.png`} alt="Pics" style={{width: '40px'}} />
                <span style={{color: 'black'}} className="ms-3 mt-4">Settings</span>
            </h2>

            <div className="my-4 py-2 border-bottom border-4" style={{color: 'black'}}>
                <span style={{color: ''}} className="me-5 mt-4 border-bottom py-2">Account</span>
                <span style={{color: ''}} className="mx-4 mt-4">Privacy</span>
                <span style={{color: ''}} className="mx-4 mt-4">Email&Message</span>
                <span style={{color: ''}} className="mx-4 mt-4">Notification</span>
                <span style={{color: ''}} className="mx-4 mt-4">Ref</span>
            </div>

            <div className="my-2">
                <span className="text-dark">
                    <p className="fw-bold mb-3" style={{color: 'black'}}>Preferences</p>
                    <div className="d-flex justify-content-between" style={{color: 'black'}}>
                        <span className="h6 mb-0">Email</span>
                        <span>
                            <button className="btn btn-sm btn-outline-primary">Change</button>
                        </span>
                    </div>
                    <small style={{color: 'grey', lineHeight: '0'}}>imaginedreams@gmail.com</small>
                </span>
            </div>
            <div className="my-3">
                <span className="text-dark">
                    <div className="d-flex justify-content-between" style={{color: 'black'}}>
                        <span className="h6 mb-0">Change Password</span>
                        <span className="my-0">
                            <button className="btn btn-sm btn-outline-primary my-0">Change</button>
                        </span>
                    </div>
                    <small style={{color: 'grey'}}>Password must be atleast 6 characters long</small>
                </span>
            </div>
            <div className="d-flex justify-content-between mt-3" style={{color: 'black'}}>
                <span className="h6 mb-1">Restrict people from sending friend request</span>
                <span>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Yes</label>
                    </div>
                </span>
            </div>

            <div className="my-2">
                <span className="text-dark">
                    <p className="fw-bold mt-4 mb-3" style={{color: 'black'}}>Connect</p>
                    <div className="d-flex justify-content-between" style={{color: 'black'}}>
                        <span className="h6 mb-1">Your Discord Account</span>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button style={{backgroundColor: '#6782c2'}} type="button" class="btn btn-dark btn-sm">
                                <img src={`${iconPath}discord2-removebg-preview.png`} alt="Pics" style={{width: '25px'}} />
                            </button>
                            <button style={{backgroundColor: '#6782c2'}} type="button" class="btn btn-dark btn-sm">Connect</button>
                        </div>
                    </div>
                    <small style={{color: 'grey'}}>Its username will be shown at you profile</small>
                    <div className="d-flex justify-content-between mt-3" style={{color: 'black'}}>
                        <span className="h6 mb-1">Your GitHub Account</span>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button style={{backgroundColor: 'black'}} type="button" class="btn btn-dark btn-sm">
                                <img src={`${iconPath}github2-removebg-preview.png`} alt="Pics" style={{width: '25px'}} />
                            </button>
                            <button style={{backgroundColor: 'black'}} type="button" class="btn btn-dark btn-sm">Connect</button>
                        </div>
                    </div>
                    <small style={{color: 'grey'}}>Its username will be shown at you profile</small>
                </span>
            </div>

            <div className="my-2">
                <span className="text-dark">
                    <p className="fw-bold mt-4 mb-3" style={{color: 'black'}}>Delete</p>
                    <div className="d-flex justify-content-between" style={{color: 'black'}}>
                        <span className="h6 mb-1">Remove your account</span>
                        <span>
                            <button className="btn btn-sm btn-outline-danger">Delete</button>
                        </span>
                    </div>
                    <small style={{color: 'grey'}}>It will be removed after confirmation</small>
                </span>
            </div>
        </div>

    )
}

export default AccountSettings;