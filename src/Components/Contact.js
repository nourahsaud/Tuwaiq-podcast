import React from 'react';
import {GrLocation, GrTwitter, GrInstagram} from 'react-icons/gr';
import './style.css';
const Contact = () => {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="box">
                        <div className="icon">
                            <GrLocation />
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Riyadh, S.A.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <GrTwitter />
                        </div>
                        <div className="text">
                            <h3>Twitter</h3>
                            <p>@tuwaiqPod</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <GrInstagram />
                        </div>
                        <div className="text">
                            <h3>Instagram</h3>
                            <p>@tuwaiqPod</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <h2>Send a Message</h2>
                        <div className="inputBox">
                            <input type='text' name='' required='required' />
                            <span>Name</span>
                        </div>
                        <div className="inputBox">
                            <input type='text' name='' required='required' />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required='required' />
                            <span>Type your Message ...</span>
                        </div>
                        <div className="inputBox">
                            <input type='Submit' name='' value='Send' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
