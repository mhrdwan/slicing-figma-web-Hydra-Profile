import React from "react";
import "../App";
import bga from "../assets/bg-awal.png";
import loc from "../assets/loc.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";


export default function Homepage() {
  return (
    <div className="homepage mt-5">
      <div  className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="fw-bold">
              <span className="dive">Dive</span> Into The Depths <br />
              Of <span className="virtual">Virtual Reality</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <button className="btn-build">BUILD YOUR WORLD</button>
          </div>
          <div className="col-md-7 d-flex justify-content-end bg">
            <img src={bga} alt="" />
          </div>
          <div className="col-md mt-5">
            <div className="card  ">

            <i class="bi bi-geo-alt d-flex "><h5 >Pay Us a Visit</h5></i>
                <span>Union St, Seattle, WA 98101, United States</span>
                
                <i class="bi bi-telephone justify-content-center d-flex"> <h5>Give Us a Call</h5></i>
                <span className="justify-content-center d-flex">(110) 1111-1010</span>
               
                <i class="bi bi-envelope justify-content-end d-flex"><h5>Send Us a Message</h5></i>  
                <span className="justify-content-end d-flex">Contact@HydraVTech.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
