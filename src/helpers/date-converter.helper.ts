import { parseISO } from "date-fns";

export class DateConverter {
  static convertDates(data: any[]): void {
    for (const row of data) {
      row.dtContrato = parseISO(row.dtContrato);
      row.dtVctPre = parseISO(row.dtVctPre);
    }
  }
}
