// src/app/shared/components/search-bar/search-bar.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { searchProducts } from '../../../store/actions/product.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  onSearch() {
    const query = this.searchForm.get('query')?.value;
    if (query) {
      this.store.dispatch(searchProducts({ query }));
    }
  }
}
