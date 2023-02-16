import React from "react";
import "../Styles/Heading.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
</style>;

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <div></div>
      <p>{text}</p>
      <div></div>
    </div>
  );
};

export default Heading;
