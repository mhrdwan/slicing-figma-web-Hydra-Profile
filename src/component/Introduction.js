import React from "react";
import vr from "../assets/vr.png";

export default function Introduction() {
  return (
    <div className="introduction mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 className="fw-bold ">INTRODUCTION</h2>
            <h4>
              TO HYDRA VR <i class="bi bi-arrow-right"></i>
            </h4>
            <img src={vr} width="80%" alt="" />
          </div>
          <div className="col-md-7">
            <p>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
            <h2 className="fw-bold">ABOUT</h2>
            <h5>HYDRA VR</h5>
            <br />
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <button className="btn-get">LET’S GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}
