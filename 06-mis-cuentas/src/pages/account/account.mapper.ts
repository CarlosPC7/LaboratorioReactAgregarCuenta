import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapNewAccountFromApiToVm = (
  newAccount: apiModel.AccountApi[]
): viewModel.AccountVm[] =>
  newAccount.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));


  // ¿ NewAccountApi?