import "./LandingPage.css";
// import Event from "./event/event";

import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="phone-icons">
            <TbAntennaBars5 /> <IoIosBatteryFull /> <IoIosWifi />{" "}
          </h1>
        </header>
      </div>
      <main className="main">
      <img className="event-image" src={require('../../assets/image/image 1.png')} />
      </main>
    </>
  );
};

export default LandingPage;
