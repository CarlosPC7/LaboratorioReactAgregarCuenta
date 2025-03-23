import React from "react";
import { AccountVm, createEmptyNewAccount, createEmptyNewAccountError, NewAccount, NewAccountError } from "../account.vm";
import { validateForm } from "../validations/account-form.validation";
import classes from "./account-form.component.module.css";


export const ACCOUNT_NONE = "";
export const ACCOUNT_CURRENT = "1";
export const ACCOUNT_SAVINGS = "2";
export const ACCOUNT_PAYROLL = "3";

interface Props {
  newAccount: AccountVm[];
  onCreateNewAccount: (createNewAccount: NewAccount) => void;
}

export const NewAccountComponent: React.FC<Props> = (props) => {

  const {newAccount, onCreateNewAccount} = props;
  const [account , setAccount] = React.useState<NewAccount>(createEmptyNewAccount());

  const [errors, setError] = React.useState<NewAccountError>(createEmptyNewAccountError());

  const handleSubmitNewAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setError(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onCreateNewAccount(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccount({...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmitNewAccount}>
        <div className={classes.formContainer} >
          <div>
            <label>Tipo de cuenta:</label>
            <select
                name="type"
                onChange={handleFieldChange}
                // value={newAccount.id}
                className={classes.accountSelect}
              >
              <option value={ACCOUNT_NONE}>Seleccionar</option>
              <option value={ACCOUNT_CURRENT}>Cuenta Corriente</option>
              <option value={ACCOUNT_SAVINGS}>Cuenta de Ahorro</option>
              <option value={ACCOUNT_PAYROLL}>Cuenta de Nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input name="name" onChange={handleFieldChange} type="text" className={classes.medium} />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>GUARDAR</button>
      </form>
    </div>
  );
}