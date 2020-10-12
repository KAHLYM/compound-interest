import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from 'src/app/model/result';
import { CalculatorService } from 'src/app/service/calculator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['iteration', 'offset', 'yearlyInterest', 'totalInterest', 'totalDeposit', 'balance'];
  dataSource: MatTableDataSource<Result> = new MatTableDataSource<Result>();

  subscriptionGetResults: Subscription;

  constructor(
    public calculatorService: CalculatorService,
  ) { }

  ngOnInit() {
    this.subscriptionGetResults = this.calculatorService.results.subscribe((results: Result[]) => {
      this.dataSource.data = results;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionGetResults.unsubscribe();
  }

  exportCSV(): void {

    const header = this.displayedColumns.join(',')
    const data = this.dataSource.data.map(e => [e.iteration, e.offset, e.iteration_interest, e.total_interest, e.total_deposit, e.balance].join(",")).join("\n");

    const csv = header + '\n' + data;

    const a = document.createElement('a');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = 'compound_interest_' + (Math.floor(Date.now() / 1000)) + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();

  }
}
