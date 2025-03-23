export interface AccountVm {
  id: string;
  iban: string;
  name: string;
  balance: string;
  lastTransaction: Date;
}

export interface NewAccount {
  type: string;
  name: string;
}

export const createEmptyNewAccount = (): NewAccount => ({
  type: "",
  name: "",
});

export interface NewAccountError {
  type: string;
  name: string;
};

export const createEmptyNewAccountError = (): NewAccountError => ({
  type: "",
  name: "",
});

export interface FieldValidationResult {
  succeeded: boolean;
  errorMessage?: string;
};

export interface FormValidationResult {
  succeeded: boolean;
  errors: NewAccountError;
};