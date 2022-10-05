import React from "react";
import SmartSlider from "react-smart-slider";
import "./ligeroSlider.css";

export const LigeroSlider = () => {
  const slidesArray = [
    {
      url: "https://i.imgur.com/7u8i7L1.jpg",
    },
    {
      url: "https://i.imgur.com/E8gkF2f.jpg",
    },
    {
      url: "https://i.imgur.com/t2a1zLi.jpg",
    },
  ];

  return (
    <div className="slider-completo">
      <div className="contenido-slider">
        <div className="row p-0 m-0">
          <div className="col-md-12">
            <h1 className="caption-text">
              Nostrud mollit proident eiusmod nisi veniam exercitation sunt
              aliquip eiusmod id.
            </h1>
            <p className="caption-text">
              Commodo cupidatat deserunt ipsum ea consectetur. Amet veniam esse
              cillum laborum nostrud qui voluptate fugiat. Ut tempor veniam
              occaecat velit enim reprehenderit qui ipsum deserunt ipsum duis
              amet proident eu. Officia tempor mollit sunt labore nostrud
              occaecat ea amet culpa ad. Tempor adipisicing reprehenderit qui
              cupidatat.
            </p>
            <button className="btn-ver-mas" type="submit">
              Ver más
            </button>
          </div>
        </div>
      </div>

      <div className="row p-0 m-0">
        <div className="App">
          <SmartSlider
            slides={slidesArray}
            buttonShape="square" // round or square
          />
        </div>
      </div>
    </div>
  );
};
