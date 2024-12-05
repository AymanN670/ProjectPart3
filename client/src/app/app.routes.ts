import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ProductComponent } from './Pages/product/product.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'product', component: ProductComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'contactus', component: ContactusComponent}
];