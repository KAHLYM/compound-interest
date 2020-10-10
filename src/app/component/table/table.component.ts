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

  displayedColumns: string[] = ['iteration', 'yearlyInterest', 'totalInterest', 'totalDeposit', 'balance'];
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
}
