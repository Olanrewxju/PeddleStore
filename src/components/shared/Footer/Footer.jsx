import React from 'react'
import classes from './Footer.module.css'
import Sponsor from './Sponsor'
import sponsorOne from '../../../Assets/icons/sponsor-one.svg'
import sponsorTwo from '../../../Assets/icons/sponsor-two.svg'
import sponsorThree from '../../../Assets/icons/sponsor-three.svg'
import sponsorFour from '../../../Assets/icons/sponsor-four.svg'
import sponsorFive from '../../../Assets/icons/sponsor-five.svg'
import sponsorSix from '../../../Assets/icons/sponsor-six.svg'
import sponsorSeven from '../../../Assets/icons/sponsor-seven.svg'
import sponsorEight from '../../../Assets/icons/sponsor-eight.svg'
import sponsorNine from '../../../Assets/icons/sponsor-nine.svg'
import sponsorTen from '../../../Assets/icons/sponsor-ten.svg'
import FacebookIcon from '../../../Assets/icons/facebook-Icon.svg'
import LinkedinIcon from '../../../Assets/icons/linkedin-Icon.svg'
import TwitterIcon from '../../../Assets/icons/twitter-Icon.svg'
import Button from '../../Button'

function Footer() {
  return (
        <div className={classes.site_footer}>
            <div className={classes.sponsor_section}>
                <div>
                    <Sponsor image={sponsorOne}/>
                    <Sponsor image={sponsorTwo}/>
                    <Sponsor image={sponsorThree}/>
                    <Sponsor image={sponsorFour}/>
                    <Sponsor image={sponsorFive}/>
                </div>
                <div>
                    <Sponsor image={sponsorSix}/>
                    <Sponsor image={sponsorSeven}/>
                    <Sponsor image={sponsorEight}/>
                    <Sponsor image={sponsorNine}/>
                    <Sponsor image={sponsorTen}/>
                </div>
            </div>
            <div className={classes.footer_section2}>
                <p>Subscribe to our <span>Newsletter!</span></p>
                <div className={classes.footer_btn}>
                    <Button text='Receive news' darkMode={true}/>
                    <Button text={'E-mail'} darkMode={false}/>
                </div>
                <div className={classes.theBottomNav}>
                    <div className={` ${classes.column} ${classes.column1}`}>
                        <div><span>Product</span></div>
                        <div>Home</div>
                        <div>Shop</div>
                        <div>Sign Up</div>
                        <div>Women</div>
                        <div>LookBook</div>
                    </div>
                    <div className={` ${classes.column} ${classes.column2}`}>
                        <div><span>Pricing</span></div>
                        <div>Sale</div>
                        <div>Top Pick</div>
                        <div>Price Slash</div>
                    </div>
                    <div className={` ${classes.column} ${classes.column3}`}>
                        <div><span>company</span></div>
                        <div>About</div>
                        <div>Contact Us</div>
                    </div>
                    <div className={` ${classes.column} ${classes.column4}`}>
                        <div><span>legal</span></div>
                        <div>Terms of service</div>
                        <div>Privacy Policy</div>
                        </div>
                    <div className={` ${classes.column} ${classes.column5}`}>
                        <div><span>resources</span></div>
                        <div>Bloq</div>
                        <div>FAQ</div>
                        <div>Learning centre</div>
                        <div>Developers Doc</div>
                        <div>Glossary</div>
                    </div>
                </div>  
            </div>
            <div className={classes.footer_section3}>
                <div className={classes.site_banner}>Peddle</div>
                <div>
                    <p>© 2022 Peddle by CentralNic. All Rights Reserved. </p>
                </div>
                <div>
                    <img className={classes.social_icon} src={FacebookIcon}/>
                    <img className={classes.social_icon} src={LinkedinIcon}/>
                    <img className={classes.social_icon} src={TwitterIcon}/>
                </div>
            </div>
        </div>
  )
}

export default Footer

