import { FieldValidationResult } from "../account.vm";
import { isStringValueInformed, isSelectValueValid } from "./plain.validation";

export const REQUIRED_SELECT_VALID = "Debe seleccionar el tipo de cuenta";
export const REQUIRED_FIELD_MESSAGE = "Debe indicar el alias de la cuenta";

const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

const buildValidationSucceededResult = () => ({
  succeeded: true,
})

export const validateSELECTField = (value: string) : FieldValidationResult => {
  if(!isSelectValueValid(value)) {
    return buildValidationFailedResult(REQUIRED_SELECT_VALID);
  }

  return buildValidationSucceededResult();
}

export const validateALIASField = (value: string) : FieldValidationResult => {
  if(!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSucceededResult();
}