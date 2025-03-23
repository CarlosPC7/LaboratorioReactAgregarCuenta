import {validateALIASField, REQUIRED_FIELD_MESSAGE, REQUIRED_SELECT_VALID, validateSELECTField} from '@/pages/account/validations/account-field.validation';
import {ACCOUNT_NONE} from '@/pages/account/components/account-form.component';

describe("account-field.validation specs", () => {
  describe("validateALIASField", () => {
    it("Should return error when value is empty", () => {
    //Arrange
      const value = "";

    //Act
      const result = validateALIASField(value);

    //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return error when select is not selected", () => {
    //Arrange
      const value = ACCOUNT_NONE;

    //Act
      const result = validateSELECTField(value);

    //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_SELECT_VALID);
    });

  })
})