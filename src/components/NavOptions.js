import React, { useEffect, useState } from "react";
import NavCard from "../components/NavCard.js";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] =
    useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/#miphones") {
      return setMiPhoneToggle(true);
    }
    if (window.location.pathname === "/#redmiphones") {
      return setRedmiPhoneToggle(true);
    }
    if (window.location.pathname === "/#tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/#laptops") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/#lifestyle") {
      return setFitnessAndLifestyleToggle(true);
    }
    if (window.location.pathname === "/#home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/#audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/#accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="navOptions">
      {miPhoneToggle
        ? miPhones.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
      {redmiPhoneToggle
        ? redmiPhones.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}

      {tvToggle
        ? tv.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
      {fitnessAndLifestyleToggle
        ? fitnessAndLifeStyle.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
      {homeToggle
        ? home.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
      {audioToggle
        ? audio.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
      {accessoriesToggle
        ? accessories.map((items, index) => (
            <NavCard
              key={index}
              index={index}
              name={items.name}
              price={items.price}
              image={items.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
