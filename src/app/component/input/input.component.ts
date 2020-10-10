import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/service/calculator.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
    public calculatorService: CalculatorService) {}

  ngOnInit() {
  }

  onKeyPrinciple(event: any): void {
    this.calculatorService.setPrinciple(event.target.value);
    this.calculatorService.calculate();
  }

  onKeyContribution(event: any): void {
    this.calculatorService.setPrinciple(event.target.value);
    this.calculatorService.calculate();
  }

  onKeyInterestRate(event: any): void {
    this.calculatorService.setPrinciple(event.target.value);
    this.calculatorService.calculate();
  }

  onKeyIterations(event: any): void {
    this.calculatorService.setPrinciple(event.target.value);
    this.calculatorService.calculate();
  }
}
