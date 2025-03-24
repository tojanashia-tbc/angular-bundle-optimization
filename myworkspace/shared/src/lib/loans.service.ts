import {Injectable} from "@angular/core";

export interface Loan {
  id: number
  description: string;
  amount: number;
  status: string;
}

@Injectable({providedIn: 'root'})
export class LoansService {
  private loans: Loan[] = [
    {description: 'Home Loan - Apartment A', amount: 150000, status: 'Active', id: 0},
    {description: 'Car Loan - Model B', amount: 20000, status: 'Completed', id: 1},
    {description: 'Education Loan - University C', amount: 35000, status: 'Pending', id: 2},
    {description: 'Personal Loan - Travel D', amount: 10000, status: 'Active', id: 3},
    {description: 'Business Loan - Startup E', amount: 200000, status: 'Approved', id: 4},
    {description: 'Car Loan - Model F', amount: 25000, status: 'Completed', id: 5},
    {description: 'Mortgage - House G', amount: 500000, status: 'Active', id: 6},
    {description: 'Home Loan - Villa H', amount: 300000, status: 'Pending', id: 7},
    {description: 'Education Loan - School I', amount: 15000, status: 'Approved', id: 8},
    {description: 'Personal Loan - Wedding J', amount: 8000, status: 'Rejected', id: 9},
    {description: 'Car Loan - Model K', amount: 18000, status: 'Completed', id: 10},
    {description: 'Home Loan - Condo L', amount: 220000, status: 'Active', id: 11},
    {description: 'Business Loan - Franchise M', amount: 450000, status: 'Approved', id: 12},
    {description: 'Education Loan - Master’s N', amount: 40000, status: 'Pending', id: 13},
    {description: 'Personal Loan - Medical O', amount: 12000, status: 'Completed', id: 14},
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
