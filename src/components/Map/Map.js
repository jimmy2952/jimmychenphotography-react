import React, { Component } from 'react'
import TaiwanMap from './TaiwanMap/TaiwanMap'
import HoverSection from './HoverSection/HoverSection'

class Map extends Component {
    state = {
        showHover: false
    }
    render() {
        return(
            <div style={{marginTop: "8vh", padding: "0 150px", display: "flex", justifyContent: "space-between", overflow: "hidden"}}>
                <TaiwanMap />
            </div>
        )
    }
}

export default Map