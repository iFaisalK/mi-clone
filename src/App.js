import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./Data/data.json";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers";
import Heading from "./components/Heading.js";
import Products from "./components/Products.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOptions from "./components/NavOptions.js";

function App() {
  return (
    <Router>
      <PreNavbar
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Navbar />
      <NavOptions />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <Products starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              product={data.hotAccessories.music}
              productCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              product={data.hotAccessories.smartDevice}
              productCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              product={data.hotAccessories.home}
              productCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              product={data.hotAccessories.lifeStyle}
              productCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              product={data.hotAccessories.mobileAccessories}
              productCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner end={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
