import React from 'react'
import './HoverSection.css'

import hsinchucounty from '../../../assets/images/map/hoverSection/hsinchucounty.jpg'
import hsinchucity from '../../../assets/images/map/hoverSection/hsinchucity.jpg'
import miaolicounty from '../../../assets/images/map/hoverSection/miaolicounty.jpg'
import taichungcity from '../../../assets/images/map/hoverSection/taichungcity.jpg'
import chiayicity from '../../../assets/images/map/hoverSection/chiayicity.jpg'
import tainancity from '../../../assets/images/map/hoverSection/tainancity.jpg'
import kaohsiungcity from '../../../assets/images/map/hoverSection/kaohsiungcity.jpg'
import taitungcounty from '../../../assets/images/map/hoverSection/taitungcounty.jpg'
import hualiencounty from '../../../assets/images/map/hoverSection/hualiencounty.jpg'
import yilancounty from '../../../assets/images/map/hoverSection/yilancounty.jpg'
import taipeicity from '../../../assets/images/map/hoverSection/taipeicity.jpg'
import newtaipeicity from '../../../assets/images/map/hoverSection/newtaipeicity.jpg'
import keelungcity from '../../../assets/images/map/hoverSection/keelungcity.jpg'

const hoverSection = props => {
    const hoverClass = ["section-image-container"]
    if(props.hover) hoverClass.push("hoverImage") 

    let imgSrc
    switch (props.imgSrc) {
        case "hsinchucounty":
            imgSrc = hsinchucounty
            break
        case "hsinchucity":
            imgSrc = hsinchucity
            break
        case "miaolicounty":
            imgSrc = miaolicounty
            break
        case "taichungcity":
            imgSrc = taichungcity
            break
        case "chiayicity":
            imgSrc = chiayicity
            break
        case "tainancity":
            imgSrc = tainancity
            break
        case "kaohsiungcity":
            imgSrc = kaohsiungcity
            break
        case "taitungcounty":
            imgSrc = taitungcounty
            break
        case "hualiencounty":
            imgSrc = hualiencounty
            break
        case "yilancounty":
            imgSrc = yilancounty
            break
        case "taipeicity":
            imgSrc = taipeicity
            break
        case "newtaipeicity":
            imgSrc = newtaipeicity
            break
        case "keelungcity":
            imgSrc = keelungcity
            break
    }
    return (
        <div className={hoverClass.join(" ")}>
            <div className="word">
                <h2 className="city-title">{props.title}</h2>
                <p className="city-description">
                    {props.description}
                </p>
            </div>
            <div className="hover-image" style={{
                backgroundImage: props.imgSrc ? `url(${imgSrc})` : null
            }}>
                
            </div>
        </div>
    )
}

export default hoverSection