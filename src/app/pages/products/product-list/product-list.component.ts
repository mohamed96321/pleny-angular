import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts, searchProducts, loadCategories, loadProductsByCategory } from '../../../store/actions/product.actions';
import { selectAllProducts, selectAllCategories, selectProductLoading, selectProductError } from '../../../store/selectors/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);
  categories$ = this.store.select(selectAllCategories);
  loading$ = this.store.select(selectProductLoading);
  error$ = this.store.select(selectProductError);

  currentPage = 1;
  totalPages = 10; // Example value; adjust based on your total product count and page size

  selectedCategory: string = ''; // Track the selected category

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadProducts();
    this.store.dispatch(loadCategories());
  }

  loadProducts(): void {
    const limit = 10;
    const skip = (this.currentPage - 1) * limit;
    if (this.selectedCategory) {
      // Fetch products by selected category
      this.store.dispatch(loadProductsByCategory({ category: this.selectedCategory }));
    } else {
      // Fetch all products
      this.store.dispatch(loadProducts({ limit, skip }));
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadProducts();
  }

  onSearch(query: string): void {
    this.store.dispatch(searchProducts({ query }));
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.loadProducts();
  }
}
