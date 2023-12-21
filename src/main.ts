import { CsvReader } from "./helpers/csv-reader.class";
import { DataProcessor } from "./processors/data-processor.class";

async function main(): Promise<void> {
  try {
    const filePath = 'csvs/data.csv';
    const data = await CsvReader.read(filePath);
    const { processedData, unprocessedData, errors } = DataProcessor.processData(data);

    console.log('Dados processados com sucesso:', processedData);
    console.log('Dados não processados:', unprocessedData);
    console.log('Erros:', errors);
  } catch (error) {
    console.error('Erro ao processar dados:', error);
  }
}

main();