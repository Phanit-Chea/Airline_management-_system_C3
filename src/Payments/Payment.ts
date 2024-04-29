

export class Payment {
     constructor(
          private paymentId : number,
          private amount : number,
          private creditCard : number,
     ) {}
     getPaymentId() {
          return this.paymentId;
     }
     getAmount() {
          return this.amount;
     }
}

let paytment = new Payment(12,23,4);

console.log( paytment );