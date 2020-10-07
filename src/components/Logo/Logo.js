import React from 'react'
import JimmyLogo from '../../assets/images/logo/Savoye_LET_plain_gray.png'
import classes from './Logo.module.css'

const logo = props => (
    <div className={classes.Logo}>
        <img src={JimmyLogo} alt='Jimmy Chen Photography' />
    </div>
)

export default logo