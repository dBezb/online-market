import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import styles from "../../styles/Category.module.css";

const Category = () => {
  const { id } = useParams();

  const defaultParams = {
    title: "",
    price_min: 0,
    price_max: 0,
    categoryId: "",
  };

  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!id) return;
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  const { data } = useGetProductsQuery(params);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Shoes</h2>

      <form className={styles.filters} onSubmit={() => {}}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            onChange={() => {}}
            placeholder="Product name"
          />
        </div>
      </form>
    </section>
  );
};

export default Category;
