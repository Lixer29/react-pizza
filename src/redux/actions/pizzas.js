import axios from "axios";

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (value) => ({
  type: "SET_LOADING",
  payload: value,
});
