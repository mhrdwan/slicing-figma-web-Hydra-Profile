import React from "react";
import bg2 from "../assets/bg2.png";
import shape from "../assets/shape.png";
import s1 from "../assets/1.png";
import s2 from "../assets/2.png";
import s3 from "../assets/3.png";
import s4 from "../assets/4.png";

export default function Technologi() {
  return (
    <div className="Technologi mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img className="img-bug" src={bg2} width="100%" alt="" />
            <button className="shape">
              <img src={shape} alt="" />
            </button>
          </div>
          <div className="col-12 ">
            <a href="#"><img className="" src={s1} alt="" /></a>
           <a href="#"><img className="ms-5" src={s2} alt="" /></a>
           <a href="#"><img className="ms-5" src={s3} alt="" /></a>
           <a href="#"><img className="ms-5" src={s4} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
