import React from "react";
import styles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";
const Header = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector(({ user }) => user);

  const handleClick = () => {
    if (currentUser) dispatch(toggleForm(true)); // fix later !
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff"></img>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          ></div>
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
              ></use>
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={["icon-fav"]}>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
              ></use>
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}></use>
            </svg>
            <span className={styles.count}>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
