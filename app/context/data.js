import React from "react";

const DineoutContext = React.createContext({
  restaurants: [],
  categories: [],
  offers: [],
});

export default DineoutContext;
