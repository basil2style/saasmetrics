import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lists: any = [
    { itemName: 'Customer Churn Rate' },
    { itemName: 'Monthly Recurring Revenue' },
    { itemName: 'Customer Lifetime Value' },
    { itemName: 'Customer Acquisition Cost' },
    { itemName: 'Months to Cash Out' },
    { itemName: 'Marketing ROI' },
    { itemName: 'Average Revenue per Account' },
    { itemName: 'New User Viral Coefficient' }
  ]
  constructor() { }
}
