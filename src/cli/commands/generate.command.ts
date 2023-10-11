import got from "got";
import { Command } from "./command.interface.js";
import { MockServerData, TSVFileReader } from "../../shared/types/index.js";
import { TSVOfferGenerator } from "../../shared/types/libs/offer-generator.interface.ts/tsv-offer-generator.js";
import { appendFile } from "node:fs/promises";

export class GenerateCommand implements Command {
  
  private initialData: MockServerData;

  public async load(url: string) {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async write(filepath: string, offerCount: number){
    const tsvOfferGenerator = new TSVOfferGenerator(this.initialData);

    for (let i = 0; i < offerCount; i++) {
      await appendFile(
        filepath,
        `${tsvOfferGenerator.generate()}\n`,
        {encoding: 'utf-8'}
      );
    }
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      await this.write(filepath, offerCount);
      console.info(`File ${filepath} was created!`);
    } catch (error: unknown) {
      console.log('Can\'t generate data');

      if(error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}