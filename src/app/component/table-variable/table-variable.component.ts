import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from 'src/app/model/result';

@Component({
  selector: 'app-table-variable',
  templateUrl: './table-variable.component.html',
  styleUrls: ['./table-variable.component.scss']
})
export class TableVariableComponent implements OnInit {

  displayedColumns: string[] = ['iteration', 'offset', 'yearlyInterest', 'totalInterest', 'totalDeposit', 'balance', 'interestRate', 'yearlyDeposit', 'remove'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  offset: number = 0;
  
  constructor() { }

  ngOnInit() { }

  AddIteration(): void {
    const iteration_index = ELEMENT_DATA.length + 1;
    const iteration: Result = {interest_rate: 0, iteration: iteration_index, iteration_deposit: 0, iteration_interest: 0, total_deposit: 0, total_interest: 0, balance: 0, offset: iteration_index + this.offset};
    ELEMENT_DATA.push(iteration);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  UpdateInterestRate(event, index: number): void {
    if (event.target.value == "") {
      event.target.value = "0.00";
    }

    ELEMENT_DATA[index].interest_rate = parseInt(event.target.value);
  }

  UpdateYearlyDeposit(event, index: number): void {
    if (event.target.value == "") {
      event.target.value = "0.00";
    }

    ELEMENT_DATA[index].iteration_deposit = parseInt(event.target.value);
  }

  Update(): void {
    for (var iteration: number = 0; iteration < ELEMENT_DATA.length; iteration++) {
      const last_result: Result = iteration == 0 ? {interest_rate: 0, iteration: 0, iteration_deposit: 0, iteration_interest: 0, total_deposit: 0, total_interest: 0, balance: 0, offset: 0} : ELEMENT_DATA[iteration - 1];
      const current_result: Result = ELEMENT_DATA[iteration];
      
      var interest: number = (last_result.balance + current_result.iteration_deposit) * (current_result.interest_rate * 0.01);

      var result: Result = {
        interest_rate: current_result.interest_rate,
        iteration: iteration + 1,
        iteration_deposit: current_result.iteration_deposit,
        iteration_interest: interest,
        total_deposit: last_result.total_deposit + current_result.iteration_deposit,
        total_interest: last_result.total_interest + interest,
        balance: last_result.balance + current_result.iteration_deposit + interest,
        offset: this.offset + iteration + 1,
      }

      ELEMENT_DATA[iteration] = result;
    }

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ExportCSV(): void {

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

  Remove(event, index: number): void {
    ELEMENT_DATA.splice(index, 1); 

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

    this.Update();
  }

  OnFocus(event): void {
    event.target.select();
  }

}

var ELEMENT_DATA: Result[] = [];
