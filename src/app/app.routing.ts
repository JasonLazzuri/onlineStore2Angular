import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';


const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'listings/:id',
    component: ListingDetailComponent
  },
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
