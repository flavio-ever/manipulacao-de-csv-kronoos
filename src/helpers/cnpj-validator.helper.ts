import { cpf, cnpj } from "cpf-cnpj-validator";

export class CpfCnpjValidator {
  static validate(value: string): boolean {
    const cleanValue = value.replace(/\D/g, "");
    return cpf.isValid(cleanValue) || cnpj.isValid(cleanValue);
  }
}
