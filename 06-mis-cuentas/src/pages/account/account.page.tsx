import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css"
import {NewAccountComponent} from '@/pages/account/components/account-form.component';
import { NewAccount } from "./account.vm";
import {AccountVm} from '@/pages/account/account.vm';
import { saveAccount } from "./api";
import { mapNewAccountFromApiToVm } from "./account.mapper";

export const AccountPage: React.FC = () => {
  const [newAccount, setNewAccount] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    saveAccount().then((result) => {
    const NewAccountVm = result.map(mapNewAccountFromApiToVm);
    setNewAccount(NewAccountVm)});
  }, [])

    const handleNewAccount = (createNewAccount: NewAccount) => {
      console.log(createNewAccount);
    }

  return (
  <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <NewAccountComponent 
          newAccount={newAccount}
          onCreateNewAccount={handleNewAccount}
        />
      </div>
  </AppLayout>
  );
};
