import "./LandingPage.css";
import Button from "../Button/Button";

import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";

const LandingPage = (props) => {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="phone-icons">
            <TbAntennaBars5 /> <IoIosBatteryFull /> <IoIosWifi />{" "}
          </h1>
        </header>
      </div>
        <h1 className="main-title">Imagin if</h1>
        <h1 className="span">Snapchat</h1>
        <h1 className="main-title-had">had events.</h1>
        <h2 className="second-title">Easily host and share events with your friends across any social media.</h2>
      <img className="event-image" src={require('../../assets/image/image 1.png')} />
      <button
      className="button"
      type={props.type}
      onClick={props.onClick}
    >
        <h1 className="btn-title">Create my event</h1>
    </button>
      
    
    </>
  );
};

export default LandingPage;
