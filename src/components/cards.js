import React from "react";
import "./cards.css"
import blue1 from "../assets/blue1.png"
import blue2 from "../assets/blue2.png"
import blue3 from "../assets/blue3.png"


const cards = () => {
  return (
      <div className="flex-container" style={{justifyContent:"center",marginBottom:"30px"}}>
    <div class="flex-item-start" style={{maxWidth:"18rem",height:"14rem"}}>
  <div class="card-header"><img src={blue1} alt="cloud" style={{color:"blue"}}/></div>
  <div class="card-body">
    <h6 class="card-title">Better Coverage</h6>
    <small class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</small>
  </div>
</div>
<div class="flex-item-middle" style={{maxWidth:"18rem",height:"14rem"}}>
  <div class="card-header"><img src={blue2} alt="cloud" style={{color:"blue"}}/></div>
  <div class="card-body">
    <h6 class="card-title">1 Gbps Data Rate</h6>
    <small class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</small>
  </div>
</div>
<div class="flex-item-end" style={{maxWidth:"18rem",height:"14rem"}}>
  <div class="card-header"><img src={blue3} alt="cloud" style={{color:"blue"}}/></div>
  <div class="card-body">
    <h6 class="card-title">More Data Rate</h6>
    <small class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</small>
  </div>
</div>
  </div>
  );
};
export default cards;
