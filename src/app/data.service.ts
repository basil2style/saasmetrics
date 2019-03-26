import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lists: any = [
    {
      itemName: 'Customer Churn Rate',
      value1: 'New Clients Churned',
      value2: 'Existing Customers Churned',
      value3: 'Cusomters (start of period)',
      'learnUrl': 'https://saasmetrics.co/churn/'
    },
    {
      itemName: 'Monthly Recurring Revenue',
      value1: 'Existing MRR',
      value2: 'New Subscriptions Revenue',
      value3: 'Reactivation',
      value4: 'Expansion',
      value5: 'Churn',
      value6: 'Contractions',
      'learnUrl': 'https://saasmetrics.co/monthly-recurring-revenue/'
    },
    {
      itemName: 'Customer Lifetime Value',
      'learnUrl': 'https://saasmetrics.co/customer-lifetime-value/'
    },
    {
      itemName: 'Customer Acquisition Cost',
      'learnUrl': 'https://saasmetrics.co/customer-acquisition-cost/'
    },
    {
      itemName: 'Months to Cash Out',
      'learnUrl': 'https://www.liveplan.com/blog/metrics-in-a-minute-cash-burn-rate/'
    },
    {
      itemName: 'Marketing ROI',
      'learnUrl': 'http://www.marketingmo.com/campaigns-execution/how-to-calculate-roi-return-on-investment/'
    },
    {
      itemName: 'Average Revenue per Account',
      'learnUrl': 'https://saasmetrics.co/average-revenue-per-account/'
    },
    { itemName: 'New User Viral Coefficient' }
  ]

  //pass data
  private data = [];

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }

  constructor() { }
}
