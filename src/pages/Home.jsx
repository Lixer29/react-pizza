import React from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
const categoryNames = [
  "Мясние",
  "Вегетирианские",
  "Гриль",
  "Острие",
  "Закритие",
];
const sortNames = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const addPizza = (obj) => {

    dispatch(addPizzaToCart(obj))
  };
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={onSelectCategory}
            activeCategory={category}
            items={categoryNames}
          ></Categories>
          <SortPopup
            items={sortNames}
            activeSortType={sortBy.type}
            onClickSortType={onSelectSortType}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => {
                return (
                  <PizzaBlock
                    onAddPizza={(smt) => addPizza(smt)}
                    key={obj.id}
                    {...obj}
                    cartItems={cartItems[obj.id] && cartItems[obj.id].items.length}
                  />
                );
              })
            : Array(10)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
