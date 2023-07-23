import React from "react";
import "./Sidebar2.css";
import RangSlider from "./rangSlider";

const tick = [
  {
    key: 1,
    name: "Five",
    lable: "five",
  },
  {
    key: 2,
    name: "Four",
    label: "four",
  },
  {
    key: 3,
    name: "Three",
    label: "three",
  },
];
const property = [
  {
    key: 1,
    name: "Apartment",
    lable: "apartment",
  },
  {
    key: 2,
    name: "Home",
    label: "home",
  },
  {
    key: 3,
    name: "Guest",
    label: "guest",
  },
  {
    key: 4,
    name: "Resort",
    label: "resort",
  },
  {
    key: 5,
    name: "BnB",
    label: "bnb",
  },
];
const facility = [
  {
    key: 1,
    name: "Spa",
    lable: "spa",
  },
  {
    key: 2,
    name: "Wi-Fi",
    label: "wi-fi",
  },
  {
    key: 3,
    name: "Bar",
    label: "bar",
  },
  {
    key: 4,
    name: "Cafa",
    label: "cafa",
  },
  {
    key: 5,
    name: "Pools",
    label: "pools",
  },
];

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

function Sidebar2({ handleChange, checkedItems,
   handlerChange, checkedProperty, 
   handleOnChange, checkedFacility
    }) {
  return (
    <div className="sidebar2">
      <div className="sidebar2__first">
        <h3>Set Filters</h3>
        <div className="price">
          <p>Price Range </p>
          <span>
            <RangSlider />
          </span>
        </div>
        <div className="star">
          <p>Star Category</p>
            {tick.map((item) => (
              <div className="check-box" key={item.key}>
                <Checkbox
                  name={item.name}
                  checked={checkedItems[item.name]}
                  onChange={handleChange}
                />
                {item.name}
              </div>
            ))}
          </div>
          <div className="star">
            <p>Property Type</p>
            {property.map((item) => (
              <div className="check-box" key={item.key}>
                <Checkbox
                  name={item.name}
                  checked={checkedProperty[item.name]}
                  onChange={handlerChange}
                />
                {item.name}
              </div>
            ))}
          </div>
          <div className="star">
            <p>Facility</p>
            {facility.map((item) => (
              <div className="check-box" key={item.key}>
                <Checkbox
                  name={item.name}
                  checked={checkedFacility[item.name]}
                  onChange={handleOnChange}
                />
                {item.name}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Sidebar2;
