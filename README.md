# Compound Interest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Calculation Method

### Input

| Name                   | Description                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Principal              | Amount of money that you have available to invest initially                                                                          |
| Contribution (Monthly) | Amount that you plan to add to the principal every month, or a negative number for the amount that you plan to withdraw every month |
| Interest Rate          | Estimated annual interest rate                                                                                                      |
| Iterations             | Length of time, in years, that you plan to save                                                                                     |
| Iteration (Offset)     | Initial number to increment (with respect to Iterations)                                                                            |

### Method

The amount is calculated through incremental interation that uses the previous amount. The code that calculates the amount is detailed below. The other aspects displayed in the table are calculated after the initial calculation. Contributions are added at the beginning of the calculation. Interest occurs annually.

    for (var iteration: number = 0; iteration < this.iterations; iteration++) {
        var amount: number = (amount + this.contribution) * (1 + (this.interest_rate * 0.01));

see [calculator.service.ts](https://github.com/KAHLYM/compound-interest/blob/main/src/app/service/calculator.service.ts)

### Output

* Year
* Offset
* Yearly Interest
* Total Interest
* Total Deposits
* Balance

## Export to CSV

There exists the ability to export the tabulated results to a CSV file through the menu (located in the top-right of the Tabulated Results card).