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
      value1: 'Churn Rate',
      value2: 'Total Revenue',
      value3: 'Customers',
      'learnUrl': 'https://saasmetrics.co/customer-lifetime-value/'
    },
    {
      itemName: 'Customer Acquisition Cost',
      value1: 'Marketing Expenses',
      value2: 'Sales Expenses',
      value3: 'New Customers',
      'learnUrl': 'https://saasmetrics.co/customer-acquisition-cost/'
    },
    {
      itemName: 'Months to Cash Out',
      value1: 'Initial Cash',
      value2: 'Monthly Operating Expenses',
      value3: 'Monthly Revenue',
      'learnUrl': 'https://www.liveplan.com/blog/metrics-in-a-minute-cash-burn-rate/'
    },
    {
      itemName: 'Marketing ROI',
      value1: 'Gross Profit',
      value2: 'Marketing Investment',
      'learnUrl': 'http://www.marketingmo.com/campaigns-execution/how-to-calculate-roi-return-on-investment/'
    },
    {
      itemName: 'Average Revenue per Account',
      value1: 'Total Revenue',
      value2: 'Paying Customers',
      'learnUrl': 'https://saasmetrics.co/average-revenue-per-account/'
    },
    {
      itemName: 'New User Viral Coefficient',
      value1: 'Current Users',
      value2: 'Invitations Sent by Users',
      value3: 'Conversion Rates',
    }
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
