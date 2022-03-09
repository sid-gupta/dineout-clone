import { useContext } from "react";

import DineoutContext from "../context/data";

export default useData = () => {
  const { restaurants, categories, offers } = useContext(DineoutContext);

  const getRestaurantById = (id) => {
    return restaurants.find((restaurant) => restaurant.id === id);
  };

  const getRestaurants = () => {
    return restaurants;
  };

  const getCategories = () => {
    return categories;
  };

  const getOffers = () => {
    return offers;
  };

  const getTrendingRestaurants = () => {
    return restaurants.filter((restaurant) => restaurant.trending);
  };

  return {
    getCategories,
    getRestaurants,
    getRestaurantById,
    getOffers,
    getTrendingRestaurants,
  };
};
