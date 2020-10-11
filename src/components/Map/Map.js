import React, { Component } from 'react'
import TaiwanMap from './TaiwanMap/TaiwanMap'
import classes from './Map.module.css'

class Map extends Component {
    state = {
        showHover: false
    }
    render() {
        return(
            <div className={classes.Map}>
                <TaiwanMap />
            </div>
        )
    }
}

export default Map