import { DioAccount } from "./DioAccount";
import _ from "lodash";

export class CompanyAccount extends DioAccount {
  private score: number;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.score = _.random(0, 100);
  }

  public getScore = (): void => {
    console.log(`Score: ${this.score}`);
  };

  public getLoan = (value: number): void => {
    if (this.validateStatus()) {
      if (value > 0 && value <= 20_000) {
        if (this.score < 45) {
          console.log(
            "Empréstimo não aprovado, porque seu score está abaixo de 45"
          );
        } else {
          this.deposit(value);
          console.log(
            `Voce pegou um empréstimo de R$${value.toLocaleString("pt-BR")},00`
          );
        }
      } else if (value > 20_000 && value <= 100_000) {
        if (this.score < 65) {
          console.log(
            "Empréstimo não aprovado, porque seu score está abaixo de 65"
          );
        } else {
          this.deposit(value);
          console.log(
            `Voce pegou um empréstimo de R$${value.toLocaleString("pt-BR")},00`
          );
        }
      } else if (value > 100_000) {
        if (this.score < 90) {
          console.log(
            "Empréstimo não aprovado, porque seu score está abaixo de 90"
          );
        } else {
          this.deposit(value);
          console.log(
            `Voce pegou um empréstimo de R$${value.toLocaleString("pt-BR")},00`
          );
        }
      } else {
        console.log("Valor inválido");
      }
    } else {
      console.log("Conta inativa");
    }
  };
}
