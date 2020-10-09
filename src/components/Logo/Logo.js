import React from 'react'
import JimmyLogo from '../../assets/images/logo/Savoye_LET_plain_gray.png'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const logo = props => (
    <Link to="/">
        <div className={classes.Logo}>
            <img src={JimmyLogo} alt='Jimmy Chen Photography' />
        </div>
    </Link>
)

export default logo