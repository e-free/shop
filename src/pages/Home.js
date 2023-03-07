import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, getTopSales } from "../modules/middleware";
import Catalog from "./Catalog";
import Preloader from "../includes/Preloader";
import TopSales from "../includes/TopSales";

function Home () {
  const loadingTopSales = useSelector((state) => state.topSalesSlice.loading);
  const loadingItems = useSelector((state) => state.itemsSlice.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopSales());
    dispatch(getItems());
  }, [dispatch]);

  /*
   {loadingItems ? 
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Preloader/>
      </section> : <Catalog/>}
  */
 console.log("loadingItems", loadingItems );

    return <>
    {loadingTopSales ? 
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Preloader/>
      </section> : <TopSales/>}

     <Catalog/>
    </>
  
  }
  export default Home