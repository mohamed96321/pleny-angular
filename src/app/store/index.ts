import { AuthState } from './reducers/auth.reducer';
import { ProductState } from './reducers/product.reducer';

export interface AppState {
  auth: AuthState;
  products: ProductState
}
