import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage/Homepage";
import BuyProperty from "./pages/BuyProperty/BuyProperty";
import RentLand from "./pages/RentLand/RentLand";
import Map from "./pages/Map/Map";
import Lands from "./pages/Lands/Lands";
import Properties from "./pages/Properties/Properties";
import Reward from "./pages/Reward/Reward";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-custom-primary ">
      <div className="container-fluid app-main-page">
        <Header />
        <div className="row">
          <div className="col-md-2">
            <Nav />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/maps" element={<Map />} />
              <Route path="/lands" element={<Lands />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/reward" element={<Reward />} />
              <Route path="/market-place" element={<MarketPlace />} />
              <Route path="/buy-property" element={<BuyProperty />} />
              <Route path="/rent-land" element={<RentLand />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
