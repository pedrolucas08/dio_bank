import { CompanyAccount } from "./class/CompanyAccount";
import { EspecialAccount } from "./class/EspecialAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const pedro: CompanyAccount = new CompanyAccount("Pedro", 1);
const joao: PeopleAccount = new PeopleAccount(52443, "João", 2);
const jose: EspecialAccount = new EspecialAccount("José", 3);

pedro.deposit(1000);
pedro.getScore();
pedro.withdraw(280);
pedro.withdraw(800);
pedro.getLoan(8_000);
pedro.getBalance();

console.log("-------------------------------");

joao.deposit(3000);
joao.withdraw(440);
joao.withdraw(4000);
joao.getDocId();
joao.getBalance();

console.log("-------------------------------");

jose.deposit(400);
jose.withdraw(50);
jose.withdraw(380);
jose.getBalance();
