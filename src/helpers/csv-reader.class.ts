import * as fs from "fs";
import csv from "csv-parser";

export class CsvReader {
  static async read(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const data: any[] = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
          data.push(row);
        })
        .on("end", () => {
          resolve(data);
        })
        .on("error", (error: any) => {
          reject(error);
        });
    });
  }
}
