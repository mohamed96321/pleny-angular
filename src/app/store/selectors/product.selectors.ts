import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../reducers/product.reducer';

// Feature selector for the product state
export const selectProductState = createFeatureSelector<ProductState>('products');

// Selectors for specific pieces of the state
export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectAllCategories = createSelector(
  selectProductState,
  (state: ProductState) => state.categories
);

export const selectProductLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);

export const selectProductError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);
