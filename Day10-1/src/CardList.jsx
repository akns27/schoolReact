import "./styles.css";
import React from "react";
import roomDetails from "./Rooms";
import Card from "./components/Card";
const CardList = () => {
  return (
    <div>
      <h2>Your result is here!</h2>
      {roomDetails.map((item) => (
        <Card
          key={item.key}
          name={item.name}
          location={item.location}
          totalGuest={item.totalGuest}
          rating={item.rating}
          numberOfRating={item.numberOfRating}
          price={item.price}
          image={item.image}
          // key: 1,
          // name: "OLIVE Serviced 아파트",
          // location: "Salt Lake",
          // totalGuest: "4",
          // rating: "4.76",
          // numberOfRating: "5",
          // price: "30,498",
          // image:
          //   "https://a0.muscache.com/im/pictures/a034f6f6-61e7-4cf6-9d90-777587ea0b26.jpg?aki_policy=large",
        />
      ))}
    </div>
  );
};

export default CardList;
