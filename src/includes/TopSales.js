import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

function TopSales() {
  const { topSales } = useSelector((state) => state.topSalesSlice);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {topSales.map((el) => <Card item={el} key={el.id}/>)}
      </div>
  </section>
  )
}
export default TopSales