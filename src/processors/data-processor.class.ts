import { CpfCnpjValidator } from "../helpers/cnpj-validator.helper";
import { CurrencyFormatter } from "../helpers/currency-formatter.helper";
import { DateConverter } from "../helpers/date-converter.helper";

// Dtos
import { ProcessDataResponseDTO } from "../dtos/process-data-response.dto";

export class DataProcessor {
  static validateTotalAndInstallments(data: any[], errors: string[]): void {

    console.log(data)
    for (const row of data) {
      const total = parseFloat(row.vlTotal);
      const installmentValue = parseFloat(row.vlPresta);
      const calculatedInstallment = total / parseInt(row.qtPrestacoes, 10);

      if (calculatedInstallment !== installmentValue) {
        errors.push(
          `Erro de validação para nrContrato ${row.nrContrato}: Valor de prestação inconsistente.`
        );
      }
    }
  }

  static processData(data: any[]): ProcessDataResponseDTO {
    const processedData: any[] = [];
    const unprocessedData: any[] = [];
    const errors: string[] = [];

    // Valida CPF ou CNPJ
    data.forEach((row) => {
      if (CpfCnpjValidator.validate(row.nrCpfCnpj)) {
        unprocessedData.push(row);
      } else {
        errors.push(
          `Erro de validação para nrContrato ${row.nrContrato}: CPF/CNPJ inválido.`
        );
      }
    });

    // Valida valor total e prestação
    this.validateTotalAndInstallments(unprocessedData, errors);

    // Converte valores para moeda brasileira
    unprocessedData.forEach((row) => {
      row.vlTotal = CurrencyFormatter.format(parseFloat(row.vlTotal));
      row.vlPresta = CurrencyFormatter.format(parseFloat(row.vlPresta));
      row.vlMora = CurrencyFormatter.format(parseFloat(row.vlMora));
    });

    // Converte datas para o tipo Date
    DateConverter.convertDates(unprocessedData);

    processedData.push(...unprocessedData);

    return { processedData, unprocessedData, errors };
  }
}
