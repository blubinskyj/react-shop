import { useEffect, useContext } from "react";
import { API_KAY, API_URL } from "../config";

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";

function Shop() {
  const { loading, order, isBasketShow, setGoods } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KAY } })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
    </main>
  );
}

export { Shop };
