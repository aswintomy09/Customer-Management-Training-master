import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"Customers",component:CustomersComponent},
  {path:"Orders",component:OrdersComponent},
  {path:"CardView",component:CardViewComponent},
  {path:"ListView",component:ListViewComponent},
  {path:"MapView",component:MapViewComponent},
  {path:"CustomerDetails",component:CustomerDetailsComponent},
  {path:"CustomerOrders",component:CustomerOrdersComponent},
  {path:"EditCustomer",component:EditCustomerComponent},
  {path:"back",component:MapViewComponent},
  {path:"Add-new-customer",component:AddNewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
