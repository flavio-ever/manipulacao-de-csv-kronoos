import { DataProcessor } from "../src/processors/data-processor.class";

describe("DataProcessor", () => {
  it("should validate total and installments", () => {
    const data = [
      {
        nrInst: '307',
        nrAgencia: '39',
        cdClient: '35548',
        nmClient: 'CLIENTE 1451',
        nrCpfCnpj: '95492425366',
        nrContrato: '616051',
        dtContrato: '20241224',
        qtPrestacoes: '1',
        vlTotal: '2034.76',
        cdProduto: '567',
        dsProduto: 'CDC PESSOA JURIDICA',
        cdCarteira: '12',
        dsCarteira: 'CRÉDITO DIRETO AO CONSUMIDOR',
        nrProposta: '705912',
        nrPresta: '1',
        tpPresta: 'Original',
        nrSeqPre: '0',
        dtVctPre: '20220523',
        vlPresta: '2034.76',
        vlMora: '78911.65',
        vlMulta: '42639.35',
        vlOutAcr: '0',
        vlIof: '0',
        vlDescon: '0',
        vlAtual: '123585.75999999998',
        idSituac: 'Aberta',
        idSitVen: 'Vencida'
      }
    ];

    const errors: string[] = [];
    DataProcessor.validateTotalAndInstallments(data, errors);

    expect(errors).toHaveLength(0);
  });
});
