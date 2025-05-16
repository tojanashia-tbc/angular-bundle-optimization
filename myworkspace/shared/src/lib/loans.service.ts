import {Injectable} from "@angular/core";

export interface Loan {
  id: number
  description: string;
  amount: number;
  status: string;
  type: string;
}

@Injectable({providedIn: 'root'})
export class LoansService {
  private loans: Loan[] = [
    {type: 'Home', description: 'Apartment A', amount: 150000, status: 'Active', id: 0},
    {type: 'Car', description: 'Model B', amount: 20000, status: 'Completed', id: 1},
    {type: 'Education', description: 'University C', amount: 35000, status: 'Pending', id: 2},
    {type: 'Personal', description: 'Travel D', amount: 10000, status: 'Active', id: 3},
    {type: 'Business', description: 'Startup E', amount: 200000, status: 'Approved', id: 4},
    {type: 'Car', description: 'Model F', amount: 25000, status: 'Completed', id: 5},
    {type: 'Mortgage', description: 'House G', amount: 500000, status: 'Active', id: 6},
    {type: 'Home', description: 'Villa H', amount: 300000, status: 'Pending', id: 7},
    {type: 'Education', description: 'School I', amount: 15000, status: 'Approved', id: 8},
    {type: 'Personal', description: 'Wedding J', amount: 8000, status: 'Rejected', id: 9},
    {type: 'Car', description: 'Model K', amount: 18000, status: 'Completed', id: 10},
    {type: 'Home', description: 'Condo L', amount: 220000, status: 'Active', id: 11},
    {type: 'Business', description: 'Franchise M', amount: 450000, status: 'Approved', id: 12},
    {type: 'Education', description: 'Master’s N', amount: 40000, status: 'Pending', id: 13},
    {type: 'Personal', description: 'Medical O', amount: 12000, status: 'Completed', id: 14},
  ];

  showLoanDetails() {
    console.log('showLoanDetails')
  }

  createNewLoan() {
    console.log('createNewLoan')
  }

  printLoanDetails() {
    //unused
  }

  getLoans(): Loan[] {
    return this.loans
  }
}
