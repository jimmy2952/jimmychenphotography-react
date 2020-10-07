import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="./map">攝影地圖</NavigationItem>
        <NavigationItem link="./portfolio">作品集</NavigationItem>
        <NavigationItem link="./about">關於Jimmy</NavigationItem>
        <NavigationItem link="./contact">聯絡方式</NavigationItem>
    </ul>
)

export default NavigationItems