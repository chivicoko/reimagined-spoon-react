import React from "react";
const iconPath = process.env.PUBLIC_URL + '/assets/';

const NotificationSettings = (props) => {
    
    return (
        <div className="col-7 mt-3 offset-1">
            <h2 className="fw-bold my-5">
                <img src={`${iconPath}settings.png`} alt="Pics" style={{width: '40px'}} />
                <span style={{color: 'black'}} className="ms-3 mt-4">Settings</span>
            </h2>

            <div className="my-5 py-2 border-bottom border-4" style={{color: 'black'}}>
                <span style={{color: ''}} className="me-5 mt-4">Account</span>
                <span style={{color: ''}} className="mx-4 mt-4">Privacy</span>
                <span style={{color: ''}} className="mx-4 mt-4">Email&Message</span>
                <span style={{color: ''}} className="mx-4 mt-4 border-bottom py-2">Notification</span>
                <span style={{color: ''}} className="mx-4 mt-4">Ref</span>
            </div>

            <div className="my-2">
                <span className="text-dark">
                    <p className="fw-bold mb-3" style={{color: 'black'}}>Follower</p>
                    <div className="d-flex justify-content-between" style={{color: 'black'}}>
                        <span className="h6 mb-1">Do you want a notification when you have a new follower?</span>
                        <span>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                <label class="form-check-label" for="flexSwitchCheckChecked">Yes</label>
                            </div>
                        </span>
                    </div>
                    <small style={{color: 'grey'}}>We will send you a notification for this</small>
                </span>
            </div>

            <div className="my-2">
                <span className="text-dark">
                    <p className="fw-bold mt-4 mb-3" style={{color: 'black'}}>Comment</p>
                    <div className="d-flex justify-content-between" style={{color: 'black'}}>
                        <span className="h6 mb-1">Do you want a notification when a user comment on your post?</span>
                        <span>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label class="form-check-label" for="flexSwitchCheckChecked">Yes</label>
                            </div>
                        </span>
                    </div>
                    <small style={{color: 'grey'}}>We will send you a notification for this</small>
                    <div className="d-flex justify-content-between mt-3" style={{color: 'black'}}>
                        <span className="h6 mb-1">Do you want a notification when a user respond to your comment?</span>
                        <span>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                <label class="form-check-label" for="flexSwitchCheckChecked">Yes</label>
                            </div>
                        </span>
                    </div>
                    <small style={{color: 'grey'}}>We will send you a notification for this</small>
                </span>
            </div>
        </div>



    )
}

export default NotificationSettings;