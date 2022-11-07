import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    
    this.getCustomers();
 }
private getCustomers(){
  this.customerService.getCustomerList().subscribe(data =>{
    this.customers=data;
  });
}

deleteCustomer(id:number){
  this.customerService.deleteCustomer(id).subscribe(data => {
    console.log(data);
    this.getCustomers();
  })
}
}