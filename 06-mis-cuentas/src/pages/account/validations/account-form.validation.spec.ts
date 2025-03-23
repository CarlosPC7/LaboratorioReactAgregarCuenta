import {NewAccount} from '@/pages/account/account.vm';
import { ACCOUNT_CURRENT } from '../components';
import * as accountFieldValidation from "./account-field.validation";
import { vi } from "vitest";
import { validateForm } from './account-form.validation';

describe("account-form.validation specs", () => {
  describe("validateForm", () => {
    it("Should return true when all fields are correct", () => {
      //Arrange
      const createNewAccount: NewAccount = {
        type: ACCOUNT_CURRENT,
        name: "Lo que sea"
      };

      vi.spyOn(accountFieldValidation, "validateSELECTField").mockReturnValue({succeeded: true,});
      vi.spyOn(accountFieldValidation, "validateALIASField").mockReturnValue({succeeded: true,});

      //Act
      const result = validateForm(createNewAccount);

      //Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      })
    });

    it("Should return false when a field is incorrect", () => {
      //Arrange
      const createNewAccount: NewAccount = {
        type: ACCOUNT_CURRENT,
        name: ""
      };

      vi.spyOn(accountFieldValidation, "validateSELECTField").mockReturnValue({succeeded: true,});
      vi.spyOn(accountFieldValidation, "validateALIASField").mockReturnValue({succeeded: false, errorMessage: "Error"});

      //Act
      const result = validateForm(createNewAccount);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Error",
      })
    });
  });
})