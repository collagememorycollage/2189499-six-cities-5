import { Logger as PinoInstance, pino, transport } from 'pino';
import { Logger } from './logger.interface.js';
import { getCurrentModuleDerectory } from '../../../helpers/file-system.js';
import {resolve} from 'node:path';

export class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    const modulePath = getCurrentModuleDerectory();
    const logFilePath = './2189499-six-cities-5/log/rest.log';
    const destination = resolve(modulePath, '../../../', logFilePath);

    // const fileTransport = transport({
    //   target: 'pino/file',
    //   options: {destination}
    // });
    const multiTransport = transport({
      targets: [
        {
          target: 'pino/file',
          options: {destination},
          level: 'debug'
        },
        {
          target: 'pino/file',
          level: 'info',
          options: {},
        }
      ]
    });

    this.logger = pino({}, multiTransport);
  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    this.logger.error(error, message, ...args);
  }

  public info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }
}
