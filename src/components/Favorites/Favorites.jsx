import React from "react";
import styles from "../../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../features/user/userSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Favourites</h2>

      {!favorites.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favorites.map((item) => {
              const { title, category, images, price, id, quantity } = item;
              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <div className={styles.name}>{title}</div>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.button}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      Add to cart
                    </div>
                  </div>
                  <div className={styles.total}>{price * quantity}$</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Favorites;
