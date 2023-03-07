import {
  currentCategoriesId,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess
} from "./categoriesSlice";
import {
  fetchItemsFailure,
  fetchItemsMoreSuccess,
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemSuccess,
} from "./itemsSlice";
import {
  fetchTopSalesRequest,
  fetchTopSalesSuccess,
  fetchTopSalesFailure
} from "./topSalesSlice";
import { postCartFailure, postCartRequest, postCartSuccess } from "./cartSlice";
export function getTopSales() {
  return async (dispatch) => {
    dispatch(fetchTopSalesRequest());
    try {
      const response = await fetch("http://localhost:7070/api/top-sales");
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();

      dispatch(fetchTopSalesSuccess(data));
    } catch (error) {
      dispatch(fetchTopSalesFailure(error));
    }
  };
};

export function getCategories() {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
      const response = await fetch("http://localhost:7070/api/categories");
      if (!response.ok) {
        console.log(response);
        throw new Error();
      }
      const data = await response.json();

      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};

export function getItems(id) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    let url = '';
    if (id) {
      url = `?categoryId=${id}`;
      dispatch(currentCategoriesId(id));
    } else {
      dispatch(currentCategoriesId(null));
    }

    try {
      const response = await fetch("http://localhost:7070/api/items" + url);

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getItemsMore(id, offset) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());

    let url = `?offset=${offset}`;
    if (id) {
      url = `?categoryId=${id}&offset=${offset}`;
    }

    try {
      const response = await fetch("http://localhost:7070/api/items" + url);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      data.map((el) => dispatch(fetchItemsMoreSuccess(el)))
      // dispatch(fetchItemsMoreSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getSearch(text) {
  return async (dispatch) => {

    dispatch(fetchItemsRequest());
    let url = `?q=${text}`;
    try {
      const response = await fetch("http://localhost:7070/api/items" + url);

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
};

export function getOrderItem(id) {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch(`${process.env.REACT_APP_URL_API_ITEMS}/${id}`);

      if (!response.ok) {
        throw new Error('Something bad happened');
      };
      const data = await response.json();
      dispatch(fetchItemSuccess(data));
    } catch (e) {
      dispatch(fetchItemsFailure('Что то пошло не так!'));
    };
  };
};

export function postOrder(item) {
  return async (dispatch) => {
    dispatch(postCartRequest());
    try {
      const response = await fetch(process.env.REACT_APP_URL_API_ORDER, {
        method: 'POST',
        body: JSON.stringify(item)
      });

      if (!response.ok) {
        throw new Error('Something bad happened');
      };
      dispatch(postCartSuccess());
    } catch (e) {
      dispatch(postCartFailure('Что то пошло не так!'));
    };
  };
};