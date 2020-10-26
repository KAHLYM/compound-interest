import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public results: Subject<Result[]> = new Subject();

  private contribution: number = 0;
  private offset: number = 0;
  private interest_rate: number = 0;
  private iterations: number = 0;
  private principal: number = 0;

  constructor() { }

  public async setContribution(contribution: number): Promise<any> {
    this.contribution = contribution;
    return;
  }

  public async setInterestRate(interest_rate: number): Promise<any> {
    this.interest_rate = interest_rate;
    return;
  }

  public async setIterations(iterations: number): Promise<any> {
    this.iterations = iterations;
    return;
  }

  public async setPrincipal(principal: number): Promise<any> {
    this.principal = principal;
    return;
  }

  public async setOffset(offset: number): Promise<any> {
    this.offset = offset;
    return;
  }

  public calculate(): void {
    var results: Result[] = [];

    for (var iteration: number = 0; iteration < this.iterations; iteration++) {

      const last_result: Result = results.length ? results[results.length - 1] : {iteration: 0, iteration_deposit: 0, iteration_interest: 0, total_deposit: 0, total_interest: 0, balance: this.principal, offset: 0};

      var interest: number = (last_result.balance + this.contribution) * (this.interest_rate * 0.01);

      var result: Result = {
        iteration: iteration + 1,
        iteration_deposit: this.contribution,
        iteration_interest: interest,
        total_deposit: last_result.total_deposit + this.contribution,
        total_interest: last_result.total_interest + interest,
        balance: last_result.balance + this.contribution + interest,
        offset: this.offset + iteration + 1,
      }

      results.push(result);
    }

    this.results.next(results);
  }
}
