import React from 'react'
import Button from './Button'
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subsription-heading'>
                    Thank you for taking time to view my portfolio <br/> For all inquires contact me at: gary@ligginsdevelopment.com
                </p>

                {/* <div className='input-areas'>
                   <form>
                        <input type='email' name='email' className='footer-input' placeholder='Your Email'/> 
                        <Button buttonStyle='btn--outline'>Subscribe</Button> 
                    </form> 
                </div> */}
            </section>
            <div className='footer-links'>
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div> */}
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div> */}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3'></i>
                        </Link>
                    </div> */}
                    
                    <div className='social-icons'>
                         
                        <a href="https://github.com/garyliggins" className='social-icon-link github'  target='_blank' aria-label='gitHub'>
                        <i class="fab fa-github"></i>
                        </a>
                        <small className='website-rights'>Gary Liggins © 2021</small>
                        <a href="https://www.linkedin.com/in/garyliggins/" className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    
                </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
