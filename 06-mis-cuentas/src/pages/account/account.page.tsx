import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css"
import {NewAccountComponent} from '@/pages/account/components/account-form.component';
import { NewAccount } from "./account.vm";
import { saveAccount } from "./api";
import { mapNewAccountFromVmToApi } from "./account.mapper";
import {createEmptyNewAccount} from '@/pages/account/account.vm';
import { appRoutes } from "@/core/router";
import { useNavigate } from "react-router-dom";

export const AccountPage: React.FC = () => {
  const [newAccount, setNewAccount] = React.useState<NewAccount>(createEmptyNewAccount());
  const navigate = useNavigate();

    const handleNewAccount = (createNewAccount: NewAccount) => {
      const newAccount = mapNewAccountFromVmToApi(createNewAccount);

      saveAccount(newAccount).then((result) => {
        if (result) {
          setNewAccount(mapNewAccountFromVmToApi(result));
          alert ("Nueva cuenta creada con éxito");
          navigate(appRoutes.accountList)
        } else {
          alert ("Error al crear nueva cuenta")
        }
      })
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
