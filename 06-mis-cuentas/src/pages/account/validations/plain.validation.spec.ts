import { ACCOUNT_CURRENT, ACCOUNT_NONE, ACCOUNT_PAYROLL, ACCOUNT_SAVINGS } from "../components/account-form.component";
import { isSelectValueValid, isStringValueInformed } from "./plain.validation";

describe("plain.validation", () => {
  describe("isStringValueInformed specs", () => {
    it("should return true when the field is not empty", () => {
      //Arrange
      const field = "prueba";

      //Act
      const result = isStringValueInformed(field);

      //Assert
      expect(result).toBeTruthy();
    });

    it("should return true when the field is empty", () => {
      //Arrange
      const field = "";

      //Act
      const result = isStringValueInformed(field);

      //Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isSelectValueValid specs", () => {
    
    it("should return false when the selected value is ACCOUNT_NONE", () => {
      // Arrange
      const selectedValue = ACCOUNT_NONE;

      // Act
      const result = isSelectValueValid(selectedValue);

      // Assert
      expect(result).toBeFalsy();
    });

    it("should return true when the selected value is account current", () => {
      // Arrange
      const selectedValue = ACCOUNT_CURRENT;

      // Act
      const result = isSelectValueValid(selectedValue);

      // Assert
      expect(result).toBeTruthy();
    });

    it("should return true when the selected value is account savings", () => {
      // Arrange
      const selectedValue = ACCOUNT_SAVINGS;

      // Act
      const result = isSelectValueValid(selectedValue);

      // Assert
      expect(result).toBeTruthy();
    });

    it("should return true when the selected value is account payroll", () => {
      // Arrange
      const selectedValue = ACCOUNT_PAYROLL;

      // Act
      const result = isSelectValueValid(selectedValue);

      // Assert
      expect(result).toBeTruthy();
    });
    
  });
})