import {FormValidationResult, NewAccount} from '@/pages/account/account.vm';
import {validateALIASField, validateSELECTField} from '@/pages/account/validations/account-field.validation';

export const validateForm = (createNewAccount: NewAccount): FormValidationResult => {
  const fieldValidationResults = [
    validateSELECTField(createNewAccount.type),
    validateALIASField(createNewAccount.name)
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    }
  }
}