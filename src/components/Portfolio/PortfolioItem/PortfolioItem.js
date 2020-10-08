import React from "react";
import {
  LightgalleryProvider,
  LightgalleryItem,
} from "react-lightgallery";
import classes from './PortfolioItem.module.css'

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "250px", width: "300px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

const portfolioItem = props => (
    <div className={"content " + classes.PortfolioItem}>
      <div>
          <LightgalleryProvider>
            <h1 style={{ textAlign: "center", color: "white" }}>{props.children}</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                cursor: "pointer"
              }}
            >
              {props.imageType.map((p, idx) => (
                <PhotoItem key={idx} image={p} group="group2" />
              ))}
            </div>
            
          </LightgalleryProvider>
      </div>
    </div>
)

export default portfolioItem
