import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { searchProducts } from '../../../store/actions/product.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('query')?.valueChanges
      .pipe(
        debounceTime(300), // Delay the search action until the user stops typing for 300ms
        distinctUntilChanged() // Only trigger if the value changed
      )
      .subscribe(query => {
        if (query) {
          this.store.dispatch(searchProducts({ query }));
        }
      });
  }
}
