import React from "react";
import icon1 from "../assets/imgroundded.png";

export default function Whybuild() {
  return (
    <div className="container whybuild mt-5">
      <div className="row">
        <div className="col-md-5">
          <h4 className="fw-bold">WHY BUILD</h4>
          <h5>
            WITH HYDRA? <i class="bi bi-arrow-right"></i>
          </h5>
        </div>
        <div className="col-md-7">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className="col-md-12 d-flex">
        <div className="card-why">
          <div className="img-card ">
            <img src={icon1} alt="" />
          </div>
          <div className="h4 text-center mt-5">SIMULATION</div>
          <p className="text-center mt-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="btn-try ">TRY IT NOW</button>
        </div>
        <div className="card-why">
          <div className="img-card ">
            <img src={icon1} alt="" />
          </div>
          <div className="h4 text-center mt-5">SIMULATION</div>
          <p className="text-center mt-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="btn-try ">TRY IT NOW</button>
        </div>
        <div className="card-why">
          <div className="img-card ">
            <img src={icon1} alt="" />
          </div>
          <div className="h4 text-center mt-5">SIMULATION</div>
          <p className="text-center mt-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="btn-try ">TRY IT NOW</button>
        </div>
        <div className="card-why">
          <div className="img-card ">
            <img src={icon1} alt="" />
          </div>
          <div className="h4 text-center mt-5">SIMULATION</div>
          <p className="text-center mt-3">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className="btn-try ">TRY IT NOW</button>
        </div>
      </div>
    </div>
  );
}
