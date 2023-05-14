import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'authentication', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
