import React from 'react'
import JimmyLogo from '../../assets/images/logo/Savoye_LET_plain_gray.png'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const logo = props => (
    <div className={classes.Logo}>
        <Link to="/"><img src={JimmyLogo} alt='Jimmy Chen Photography' /></Link>
    </div>
)

export default logo