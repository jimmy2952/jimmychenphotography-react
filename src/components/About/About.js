import React from 'react'
import classes from './About.module.css'
import imgSrc from '../../assets/images/about/about.jpg'
import fb from '../../assets/images/about/socialMediaLogo/facebook.svg'
import ig from '../../assets/images/about/socialMediaLogo/instagram.svg'

const about = props => (
    <div className={classes.About}>
        <div>
            <img src={imgSrc} alt="" />
        </div>
        <div>
            <p>
                <span>嗨!</span>
                我是Jimmy，一名喜歡攝影的前端工程師。<br /><br />
                上了大學後發現，總是喜歡用照片記錄生活的各種點滴，於是在升大二的寒假買了人生中的第一台相機 — α6000，從此踏上了攝影的旅程。<br /><br />
                開始工作後，雖然可以拍照的時間被壓縮許多，但每當生活碰到瓶頸，或是心情煩悶時，攝影總是生活壓力最好的出口。
            </p>
            <div className={classes.Contact}>
                <p>聯絡方式</p>
                <a href="https://www.facebook.com/jimmychenphoto/" target="_blank" >
                    <img className={classes.facebook} src={fb} alt=""/>
                </a>
                <a href="https://instagram.com/jimmychen_photography/" target="_blank">
                    <img className={classes.instagram} src={ig} alt="" />
                </a>
                <p>我的E-mail：jimmy2952@gmail.com</p>
            </div>
        </div>
        
    </div>
)
export default about