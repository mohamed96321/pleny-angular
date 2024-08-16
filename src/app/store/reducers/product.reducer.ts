import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  searchProducts,
  searchProductsSuccess,
  searchProductsFailure,
  loadCategories,
  loadCategoriesSuccess,
  loadCategoriesFailure,
  loadProductsByCategory,
  loadProductsByCategorySuccess,
  loadProductsByCategoryFailure,
} from '../actions/product.actions';
import { Product } from '../../core/models/product.model';

export interface ProductState {
  products: Product[];
  categories: string[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  categories: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(searchProducts, (state) => ({ ...state, loading: true })),
  on(searchProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(searchProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(loadCategories, (state) => ({ ...state, loading: true })),
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
  })),
  on(loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(loadProductsByCategory, (state) => ({ ...state, loading: true })),
  on(loadProductsByCategorySuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(loadProductsByCategoryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
