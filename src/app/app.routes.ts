import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JordanComponent } from './jordan/jordan.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'jordan',
    component: JordanComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
