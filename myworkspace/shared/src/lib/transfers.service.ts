import {Injectable} from '@angular/core';

export interface Transfer {
  id: number;
  sender: string;
  recipient: string;
  amount: number;
  date: string;
}

@Injectable()
export class TransferService {
  private transfers: Transfer[] = [
    {id: 1, sender: 'John Doe', recipient: 'Jane Smith', amount: 1000, date: '2025-01-01'},
    {id: 2, sender: 'Alice Johnson', recipient: 'Bob Brown', amount: 500, date: '2025-01-05'},
    {id: 3, sender: 'Charlie Davis', recipient: 'Eve White', amount: 750, date: '2025-01-10'},
    {id: 4, sender: 'Grace Lee', recipient: 'Oscar Green', amount: 2000, date: '2025-01-12'},
    {id: 5, sender: 'Tom Harris', recipient: 'Zara Black', amount: 300, date: '2025-01-15'},
    {id: 6, sender: 'Daniel Scott', recipient: 'Mia Adams', amount: 1200, date: '2025-01-18'},
    {id: 7, sender: 'Sophia Wilson', recipient: 'Liam Carter', amount: 850, date: '2025-01-20'},
    {id: 8, sender: 'Emma Clark', recipient: 'Noah Evans', amount: 950, date: '2025-01-22'},
    {id: 9, sender: 'James Baker', recipient: 'Olivia Turner', amount: 1300, date: '2025-01-25'},
    {id: 10, sender: 'Isabella Foster', recipient: 'Lucas Reed', amount: 400, date: '2025-01-28'},
    {id: 11, sender: 'Ethan Murphy', recipient: 'Charlotte Hall', amount: 600, date: '2025-01-30'},
    {id: 12, sender: 'Benjamin Moore', recipient: 'Amelia Wright', amount: 2200, date: '2025-02-01'},
    {id: 13, sender: 'Alexander King', recipient: 'Harper Walker', amount: 700, date: '2025-02-03'},
    {id: 14, sender: 'William Gonzalez', recipient: 'Ella Young', amount: 1100, date: '2025-02-05'},
    {id: 15, sender: 'Henry Nelson', recipient: 'Ava Allen', amount: 1750, date: '2025-02-07'}
  ];

  getTransfers(): Transfer[] {
    return this.transfers;
  }

}
