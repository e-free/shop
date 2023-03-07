//import React, { ChangeEvent, ReactElement, SyntheticEvent } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useDispatch, useSelector  } from 'react-redux'
import { getSearch } from '../modules/middleware';
import { changeSearch, clearSearch } from '../modules/searchSlice';


export default function FormSearch(){
  const search = useSelector((state) => state.searchSlice);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  function submit(ev) {
    ev.preventDefault()
    if (location.pathname !== '/catalog' && search !== '') {
      navigate('/catalog');
      dispatch(getSearch(search));
      dispatch(clearSearch());
    } else {
      dispatch(getSearch(search));
      dispatch(clearSearch());
    };
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={submit}>
      <input className="form-control" placeholder="Поиск"
        value={search}
        onChange={(ev) => dispatch(changeSearch(ev.target.value))}/>
    </form>
  );
};