import React from 'react'

export default function Footer() {
    return (
        <section className="contact">
            <div className="container p-5">
                <div className="title text-center">
                    <h2 className="text-uppercase fw-bold text-main">contact</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deserunt.</p>
                </div>
                <div className="contact-info">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="address d-flex gap-4 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 384 512">{/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#1bbd36" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <div className="adress-info">
                                    <h3>Location</h3>
                                    <address>
                                        A108 Adam Street
                                        New York, NY 535022
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="address d-flex gap-4 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 512 512">{/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#1bbd36" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>                    <div className="adress-info">
                                    <h3>Contact Us</h3>
                                    <address>
                                        2398792490749
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="address d-flex gap-4 align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 384 512">{/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#1bbd36" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <div className="adress-info">
                                    <h3>Email</h3>
                                    <address>
                                        portfilio123@gmail.com
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}
