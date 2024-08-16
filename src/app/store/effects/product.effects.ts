import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../core/services/product/product.service';
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
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(({ limit, skip }) =>
        this.productService.getProducts(limit, skip).pipe(
          map((response) => loadProductsSuccess({ products: response.products })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );

  searchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchProducts),
      mergeMap(({ query }) =>
        this.productService.searchProducts(query).pipe(
          map((response) => searchProductsSuccess({ products: response.products })),
          catchError((error) => of(searchProductsFailure({ error })))
        )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.productService.getAllCategories().pipe(
          map((categories) => loadCategoriesSuccess({ categories })),
          catchError((error) => of(loadCategoriesFailure({ error })))
        )
      )
    )
  );

  loadProductsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsByCategory),
      mergeMap(({ category }) =>
        this.productService.getProductByCategory(category).pipe(
          map((response) => loadProductsByCategorySuccess({ products: response.products })),
          catchError((error) => of(loadProductsByCategoryFailure({ error })))
        )
      )
    )
  );
}
