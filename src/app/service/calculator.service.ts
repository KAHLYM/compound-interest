import { Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public results: Subject<Result[]>;

  private contribution: number = 0;
  private interest_rate: number = 0;
  private iterations: number = 0;
  private principle: number = 0;

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

  public async setPrinciple(principle: number): Promise<any> {
    this.principle = principle;
    return;
  }

  public calculate(): void {
    var results: Result[];
    var amount = this.principle;

    for (var iteration: number; iteration < this.iterations; iteration++) {
      var amount: number = (amount + this.contribution) * (1 + this.interest_rate);

      var result: Result;
      const last_result: Result = results[results.length - 1];

      result.iteration = iteration;
      result.iteration_deposit = this.contribution;
      result.iteration_interest = amount - last_result.balance - result.iteration_deposit;
      result.total_deposit = last_result.total_deposit + result.iteration_deposit;
      result.total_interest = last_result.total_interest = result.iteration_interest;
      result.balance = last_result.balance + amount;

      this.results.next(results);
    }
  }
}
