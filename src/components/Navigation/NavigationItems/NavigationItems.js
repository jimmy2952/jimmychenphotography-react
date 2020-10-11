import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>首頁</NavigationItem>
        <NavigationItem link="/map" >攝影地圖</NavigationItem>
        <NavigationItem link="/portfolio" >作品集</NavigationItem>
        <NavigationItem link="/about" >關於Jimmy</NavigationItem>
    </ul>
)

export default NavigationItems