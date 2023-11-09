import { TSVFileReader } from '../../shared/types/index.js';
import { Command } from './command.interface.js';

export class ImportCommand implements Command{
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [fileName] = parameters;
    const fileReader = new TSVFileReader(fileName.trim());

    try {
      fileReader.read();
      // console.log(fileReader.toArray());
    } catch(err) {

      if(! (err instanceof Error)) {
        console.error(`Can't import data from file ${fileName}`);
      }
    }
  }
}
