import { CpfCnpjValidator } from "../src/helpers/cnpj-validator.helper";

describe("CpfCnpjValidator", () => {
  it("should validate CPFs", () => {
    expect(CpfCnpjValidator.validate("647.858.570-05")).toBeTruthy();
  });

  it("should validate CNPJs", () => {
    expect(CpfCnpjValidator.validate("35.140.682/0001-12")).toBeTruthy();
  });

  it("should invalidate invalid CPFs and CNPJs", () => {
    expect(CpfCnpjValidator.validate("invalid")).toBeFalsy();
  });
});
