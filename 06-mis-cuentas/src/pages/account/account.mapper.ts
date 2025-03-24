import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapNewAccountFromVmToApi = (
  newAccount: viewModel.NewAccount
): apiModel.NewAccountApi => ({
    type: newAccount.type,
    name: newAccount.name,
  });