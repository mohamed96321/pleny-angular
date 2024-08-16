import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthEffects } from './store/effects/auth.effects';
import { AppComponent } from './app.component';
import { CustomDirective } from './shared/directives/custom-directive.directive';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { productReducer } from './store/reducers/product.reducer'; // Import Product Reducer
import { ProductEffects } from './store/effects/product.effects'; // Import Product Effects
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    SearchBarComponent,
    NavbarComponent,
    LoginComponent,
    ProductListComponent,
    ProductCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer, products: productReducer }),
    EffectsModule.forRoot([AuthEffects, ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
