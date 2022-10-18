import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ligeroInfluencers.css";

export default class LigeroInfluencers extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };

    return (
      <div className="ligero-slider-influencers">
        <div className="row m-0 p-0">
          <div className="text-servicios d-flex col-md-12">
            <div className="ligero-round-inf" />
            <h3 className="ligero-influencers">Influencers</h3>
          </div>
        </div>

        <Slider {...settings}>
          <div className="card-ligero-1">
            <div className="ligero-card-fam">
              <img className="ligero-i-cat" src="../assets/ligero_micro.png" alt="micro" />
              <h3 className="text-inf-lig">MicroInfluencer</h3>
            </div>
          </div>
          <div className="card-ligero-2">
            <div className="ligero-card-fam">
              <img className="ligero-i-cat" src="../assets/ligero_medio.png" alt="medio" />
              <h3 className="text-inf-lig">Influencer Medio</h3>
            </div>
          </div>
          <div className="card-ligero-3">
            <div className="ligero-card-fam">
              <img className="ligero-i-cat" src="../assets/ligero_macro.png" alt="macro" />
              <h3 className="text-inf-lig">Macroinfluencer</h3>
            </div>
          </div>
          <div className="card-ligero-4">
            <div className="ligero-card-fam">
              <img className="ligero-i-cat" src="../assets/ligero_mega.png" alt="mega" />
              <h3 className="text-inf-lig">Megainfluencer</h3>
            </div>
          </div>
          <div className="card-ligero-5">
            <div className="ligero-card-famoso">
              <img className="ligero-i-fam" src="../assets/ligero_famoso.png" alt="famoso" />
              <h3 className="text-inf-lig">Famoso</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
