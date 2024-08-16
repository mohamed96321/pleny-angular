import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product.model';

export const loadProducts = createAction(
  '[Product] Load Products',
  props<{ limit: number, skip: number }>()
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const searchProducts = createAction(
  '[Product] Search Products',
  props<{ query: string }>()
);

export const searchProductsSuccess = createAction(
  '[Product] Search Products Success',
  props<{ products: Product[] }>()
);

export const searchProductsFailure = createAction(
  '[Product] Search Products Failure',
  props<{ error: any }>()
);

export const loadCategories = createAction('[Product] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[Product] Load Categories Success',
  props<{ categories: string[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Product] Load Categories Failure',
  props<{ error: any }>()
);

export const loadProductsByCategory = createAction(
  '[Product] Load Products By Category',
  props<{ category: string }>()
);

export const loadProductsByCategorySuccess = createAction(
  '[Product] Load Products By Category Success',
  props<{ products: Product[] }>()
);

export const loadProductsByCategoryFailure = createAction(
  '[Product] Load Products By Category Failure',
  props<{ error: any }>()
);
