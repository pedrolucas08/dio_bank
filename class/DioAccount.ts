export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public getName = (): string => {
    return this.name;
  };

  public getBalance = (): void => {
    console.log(`Saldo: R$${this.balance.toLocaleString("pt-BR")},00`);
  };

  public deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
    } else {
      console.log("Conta inativa");
    }
  };

  public withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value;
        console.log("Saque realizado com sucesso");
      } else {
        console.log("Saldo insuficiente");
      }
    } else {
      console.log("Conta inativa");
    }
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inativa");
  };
}
