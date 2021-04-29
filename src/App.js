import "./styles.css";
import Text from "./Components/Text";
import Background from "./Components/Background";
import Arrows from "./Components/Arrows";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [sliderImages, setSliderImages] = useState(data);
  const [selectedImg, setSelectedImg] = useState(data[0]);
  var index = 0;

  // const handleNextBtn = () => {
  //   if()
  // };

  // console.log(selectedImg);

  return (
    <div className="App">
      <div className="slider">
        <div className="slider-Box">
          <Background selectedImg={selectedImg} />
        </div>
        <div className="text-area">
          <Text />
        </div>
        <div className="arrow-area">
          <Arrows setSliderImages={setSliderImages} />
        </div>

        {/* {sliderImages.map((item) => {
        return <img src={item} alt="iii" />;
      })} */}
      </div>
    </div>
  );
}
