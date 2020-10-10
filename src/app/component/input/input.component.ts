import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/service/calculator.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
    public calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  onKeyPrinciple(event: any): void {
    this.calculatorService.setPrinciple(parseInt(event.target.value)).then(() => {
      this.calculatorService.calculate();
    });
  }

  onKeyContribution(event: any): void {
    this.calculatorService.setContribution(parseInt(event.target.value) * 12).then(() => {
      this.calculatorService.calculate();
    });
  }

  onKeyInterestRate(event: any): void {
    this.calculatorService.setInterestRate(parseInt(event.target.value)).then(() => {
      this.calculatorService.calculate();
    });
  }

  onKeyIterations(event: any): void {
    this.calculatorService.setIterations(parseInt(event.target.value)).then(() => {
      this.calculatorService.calculate();
    });
  }

  onKeyOffset(event: any): void {
    this.calculatorService.setOffset(parseInt(event.target.value)).then(() => {
      this.calculatorService.calculate();
    });
  }
}
