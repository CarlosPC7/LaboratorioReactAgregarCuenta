import { ACCOUNT_NONE } from "../components/account-form.component";

export const isStringValueInformed = (value: string): boolean => value !== "";

export const isSelectValueValid = (value: string): boolean => value !== ACCOUNT_NONE;
