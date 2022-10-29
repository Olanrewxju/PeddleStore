import React from 'react'
import classes from './DescriptionReview.module.css'

function DescriptionReview() {
  return (
    <div>
        <div className={classes.description_review}>
            <div className={classes.description}><p>Description</p></div>
            <div className={classes.review}>Reviews(0)</div>
        </div>
            <div className={classes.description_container}>
                <p className={classes.description_content}>A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications.<br /><br /><br />

                Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.</p> 
            </div>
    </div>
  )
}

export default DescriptionReview