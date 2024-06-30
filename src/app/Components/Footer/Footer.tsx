import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container-fluid text-white footer-main">
            <div className="row pt-4">
                <div className="col-3">  
                    <ul style={{listStyleType: 'none'}}>
                        <h6>ABOUT</h6>
                        <a href="/contact" className="footer-link"><li>Contact Us</li></a>
                        <a href="/about" className="footer-link"><li>About Us</li></a>
                        <a href="/" className="footer-link"><li>Careers</li></a>
                        <a href="/" className="footer-link"><li>Corporate Information</li></a>
                        
                    </ul>
                </div>
                <div className="col-3" style={{borderLeft:'1px solid white'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <h6>HELP</h6>
                        <a href="/" className="footer-link"><li>Payments</li></a>
                        <a href="/" className="footer-link"><li>Shippings</li></a>
                        <a href="/" className="footer-link"><li>Cancellations & Returns</li></a>
                        <a href="/" className="footer-link"><li>FAQ</li></a>
                    </ul>
                </div>
                <div className="col-3" style={{borderLeft:'1px solid white'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <h6>CONSUMER POLICY</h6>
                        <a href="/" className="footer-link"><li>Cancellations & Returns</li></a>
                        <a href="/" className="footer-link"><li>Terms of Use</li></a>
                        <a href="/" className="footer-link"><li>Security</li></a>
                        <a href="/" className="footer-link"><li>Privacy</li></a>
                    </ul>
                </div>
                <div className="col-3" style={{borderLeft:'1px solid white'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <h6>Mail Us:</h6>
                        <li className="address">
                            City Shop Private limited, <br></br>India , kerala , 670141
                        </li>
                    </ul>
                </div>

                {/* copyright div */}

                <div className="row pt-2 mt-3" style={{borderTop:'1px solid white'}}>
                    <div className="col d-flex justify-content-center">
                        <p>© All Rights Reserved 2024</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer
