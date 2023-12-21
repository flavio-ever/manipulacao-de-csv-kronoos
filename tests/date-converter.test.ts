import { format } from 'date-fns';
import { DateConverter } from '../src/helpers/date-converter.helper';

describe('DateConverter', () => {
  it('should convert dates in the data array', () => {
    const data = [
      { dtContrato: '20221227', dtVctPre: '20220406' },
      { dtContrato: '20221227', dtVctPre: '20241113' },
    ];

    DateConverter.convertDates(data);

    expect(format(data[0].dtContrato, "yyyy-MM-dd'T'HH:mm:ss")).toEqual('2022-12-27T00:00:00');
    expect(format(data[0].dtVctPre, "yyyy-MM-dd'T'HH:mm:ss")).toEqual('2022-04-06T00:00:00');
    expect(format(data[1].dtContrato, "yyyy-MM-dd'T'HH:mm:ss")).toEqual('2022-12-27T00:00:00');
    expect(format(data[1].dtVctPre, "yyyy-MM-dd'T'HH:mm:ss")).toEqual('2024-11-13T00:00:00');
  });
});