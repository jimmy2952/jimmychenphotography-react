import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import classes from './Carousel.module.css'
import img01 from '../../assets/images/carousel/001.jpg'
import img02 from '../../assets/images/carousel/002.jpg'
import img03 from '../../assets/images/carousel/003.jpg'
import img04 from '../../assets/images/carousel/004.jpg'
import img05 from '../../assets/images/carousel/005.jpg'
import img06 from '../../assets/images/carousel/006.jpg'
import img07 from '../../assets/images/carousel/007.jpg'

const carousel = props => (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div className={classes.Carousel}>
            <img src={img01} alt="01" />
        </div>
        <div className={classes.Carousel}>
            <img src={img02} alt="02" />
        </div>
        <div className={classes.Carousel}>
            <img src={img03} alt="03" />
        </div>
        <div className={classes.Carousel}>
            <img src={img04} alt="04" />
        </div>
        <div className={classes.Carousel}>
            <img src={img05} alt="05" />
        </div>
        <div className={classes.Carousel}>
            <img src={img06} alt="06" />
        </div>
        <div className={classes.Carousel}>
            <img src={img07} alt="07" />
        </div>
    </Carousel>
)

export default carousel