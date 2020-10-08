import React, { Fragment } from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'

import nightScape1 from '../../assets/images/portfolio/nightscape/001_compressed.jpg'
import nightScape2 from '../../assets/images/portfolio/nightscape/002_compressed.jpg'
import nightScape3 from '../../assets/images/portfolio/nightscape/003_compressed.jpg'
import nightScape4 from '../../assets/images/portfolio/nightscape/004_compressed.jpg'
import nightScape5 from '../../assets/images/portfolio/nightscape/005_compressed.jpg'
import nightScape6 from '../../assets/images/portfolio/nightscape/006_compressed.jpg'
import nightScape7 from '../../assets/images/portfolio/nightscape/007_compressed.jpg'
import nightScape8 from '../../assets/images/portfolio/nightscape/008_compressed.jpg'
import nightScape9 from '../../assets/images/portfolio/nightscape/009_compressed.jpg'
import nightScape10 from '../../assets/images/portfolio/nightscape/010_compressed.jpg'
import nightScape11 from '../../assets/images/portfolio/nightscape/011_compressed.jpg'
import nightScape12 from '../../assets/images/portfolio/nightscape/012_compressed.jpg'
import nightScape13 from '../../assets/images/portfolio/nightscape/013_compressed.jpg'
import nightScape14 from '../../assets/images/portfolio/nightscape/014_compressed.jpg'

import nightScapeRiver1 from '../../assets/images/portfolio/nightscape_river/001_compressed.jpg'
import nightScapeRiver2 from '../../assets/images/portfolio/nightscape_river/002_compressed.jpg'
import nightScapeRiver3 from '../../assets/images/portfolio/nightscape_river/003_compressed.jpg'
import nightScapeRiver4 from '../../assets/images/portfolio/nightscape_river/004_compressed.jpg'
import nightScapeRiver5 from '../../assets/images/portfolio/nightscape_river/005_compressed.jpg'
import nightScapeRiver6 from '../../assets/images/portfolio/nightscape_river/006_compressed.jpg'
import nightScapeRiver7 from '../../assets/images/portfolio/nightscape_river/007_compressed.jpg'
import nightScapeRiver8 from '../../assets/images/portfolio/nightscape_river/008_compressed.jpg'
import nightScapeRiver9 from '../../assets/images/portfolio/nightscape_river/009_compressed.jpg'
import nightScapeRiver10 from '../../assets/images/portfolio/nightscape_river/010_compressed.jpg'
import nightScapeRiver11 from '../../assets/images/portfolio/nightscape_river/011_compressed.jpg'
import nightScapeRiver12 from '../../assets/images/portfolio/nightscape_river/012_compressed.jpg'
import nightScapeRiver13 from '../../assets/images/portfolio/nightscape_river/013_compressed.jpg'
import nightScapeRiver14 from '../../assets/images/portfolio/nightscape_river/014_compressed.jpg'

import dawn1 from '../../assets/images/portfolio/dawn/001_compressed.jpg'
import dawn2 from '../../assets/images/portfolio/dawn/002_compressed.jpg'
import dawn3 from '../../assets/images/portfolio/dawn/003_compressed.jpg'
import dawn4 from '../../assets/images/portfolio/dawn/004_compressed.jpg'
import dawn5 from '../../assets/images/portfolio/dawn/005_compressed.jpg'
import dawn6 from '../../assets/images/portfolio/dawn/006_compressed.jpg'
import dawn7 from '../../assets/images/portfolio/dawn/007_compressed.jpg'

import silhouette1 from '../../assets/images/portfolio/silhouette/001_compressed.jpg'
import silhouette2 from '../../assets/images/portfolio/silhouette/002_compressed.jpg'
import silhouette3 from '../../assets/images/portfolio/silhouette/003_compressed.jpg'
import silhouette4 from '../../assets/images/portfolio/silhouette/004_compressed.jpg'
import silhouette5 from '../../assets/images/portfolio/silhouette/005_compressed.jpg'
import silhouette6 from '../../assets/images/portfolio/silhouette/006_compressed.jpg'
import silhouette7 from '../../assets/images/portfolio/silhouette/007_compressed.jpg'

import road1 from '../../assets/images/portfolio/road/001_compressed.jpg'
import road2 from '../../assets/images/portfolio/road/002_compressed.jpg'
import road3 from '../../assets/images/portfolio/road/003_compressed.jpg'
import road4 from '../../assets/images/portfolio/road/004_compressed.jpg'
import road5 from '../../assets/images/portfolio/road/005_compressed.jpg'
import road6 from '../../assets/images/portfolio/road/006_compressed.jpg'
import road7 from '../../assets/images/portfolio/road/007_compressed.jpg'

import longEx1 from '../../assets/images/portfolio/longexposure/001_compressed.jpg'
import longEx2 from '../../assets/images/portfolio/longexposure/002_compressed.jpg'
import longEx3 from '../../assets/images/portfolio/longexposure/003_compressed.jpg'
import longEx4 from '../../assets/images/portfolio/longexposure/004_compressed.jpg'
import longEx5 from '../../assets/images/portfolio/longexposure/005_compressed.jpg'
import longEx6 from '../../assets/images/portfolio/longexposure/006_compressed.jpg'
import longEx7 from '../../assets/images/portfolio/longexposure/007_compressed.jpg'
import longEx8 from '../../assets/images/portfolio/longexposure/008_compressed.jpg'
import longEx9 from '../../assets/images/portfolio/longexposure/009_compressed.jpg'
import longEx10 from '../../assets/images/portfolio/longexposure/010_compressed.jpg'
import longEx11 from '../../assets/images/portfolio/longexposure/011_compressed.jpg'
import longEx12 from '../../assets/images/portfolio/longexposure/012_compressed.jpg'
import longEx13 from '../../assets/images/portfolio/longexposure/013_compressed.jpg'
import longEx14 from '../../assets/images/portfolio/longexposure/014_compressed.jpg'

import other1 from '../../assets/images/portfolio/other/001_compressed.jpg'
import other2 from '../../assets/images/portfolio/other/002_compressed.jpg'
import other3 from '../../assets/images/portfolio/other/003_compressed.jpg'
import other4 from '../../assets/images/portfolio/other/004_compressed.jpg'
import other5 from '../../assets/images/portfolio/other/005_compressed.jpg'
import other6 from '../../assets/images/portfolio/other/006_compressed.jpg'
import other7 from '../../assets/images/portfolio/other/007_compressed.jpg'
import other8 from '../../assets/images/portfolio/other/008_compressed.jpg'
import other9 from '../../assets/images/portfolio/other/009_compressed.jpg'
import other10 from '../../assets/images/portfolio/other/010_compressed.jpg'
import other11 from '../../assets/images/portfolio/other/011_compressed.jpg'
import other12 from '../../assets/images/portfolio/other/012_compressed.jpg'
import other13 from '../../assets/images/portfolio/other/013_compressed.jpg'
import other14 from '../../assets/images/portfolio/other/014_compressed.jpg'

const nightScape = [nightScape1, nightScape2, nightScape3, nightScape4, nightScape5, nightScape6, nightScape7, nightScape8, nightScape9, nightScape10, nightScape11, nightScape12, nightScape13, nightScape14]
const nightScapeRiver = [nightScapeRiver1, nightScapeRiver2, nightScapeRiver3, nightScapeRiver4, nightScapeRiver5, nightScapeRiver6, nightScapeRiver7, nightScapeRiver8, nightScapeRiver9, nightScapeRiver10, nightScapeRiver11, nightScapeRiver12, nightScapeRiver13, nightScapeRiver14]
const dawn = [dawn1, dawn2, dawn3, dawn4, dawn5, dawn6, dawn7]
const silhouette = [silhouette1, silhouette2, silhouette3, silhouette4, silhouette5, silhouette6, silhouette7]
const road = [road1, road2, road3, road4, road5, road6, road7]
const longEx = [longEx1, longEx2, longEx3, longEx4, longEx5, longEx6, longEx7, longEx8, longEx9, longEx10, longEx11, longEx12, longEx13, longEx14]
const other = [other1, other2, other3, other4, other5, other6, other7, other8, other9, other10, other11, other12, other13, other14]

const portfolio = props => (
    <div style={{marginTop: "70px"}}>
        <PortfolioItem imageType={nightScape}>城市夜景</PortfolioItem>
        <PortfolioItem imageType={nightScapeRiver}>夜晚水岸</PortfolioItem>
        <PortfolioItem imageType={dawn}>晨昏</PortfolioItem>
        <PortfolioItem imageType={silhouette}>背光剪影</PortfolioItem>
        <PortfolioItem imageType={road}>道路</PortfolioItem>
        <PortfolioItem imageType={longEx}>長曝</PortfolioItem>
        <PortfolioItem imageType={other}>其他</PortfolioItem>
    </div>
    
)

export default portfolio

