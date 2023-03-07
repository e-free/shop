import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getItems, getItemsMore } from "../modules/middleware";
import Card from "../includes/Card";
import Preloader from "../includes/Preloader";
import SearchForm from "../includes/SearchForm";

function Catalog() {
  const cat = useSelector((state) => state.categoriesSlice);
 
  const { loading, items } = useSelector((state) => state.itemsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);


  return <>
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <SearchForm />
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className={`nav-link ${cat.id === null ? 'active' : ''}`} href="#"
            onClick={() => dispatch(getItems())}>Все</a>
        </li>
        {cat.categories.map((el) => (
          <li className="nav-item" key={el.id}>
            <a className={`nav-link ${cat.id === el.id ? 'active' : ''}`} href="#"
              onClick={() => dispatch(getItems(el.id))} >
              {el.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="row">
        {loading ? <Preloader /> : items.map((el) => <Card item={el} key={el.id} />)}
      </div>

      <div className="text-center">
        <button className="btn btn-outline-primary"
          onClick={() => dispatch(getItemsMore(cat.id, items.length))}>Загрузить ещё</button>
      </div>
    </section>
  </>

}
export default Catalog