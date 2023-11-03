import { PinoLogger } from '../src/shared/types/libs/logger/index.js';
import { RestApplication } from './cli/rest/index.js';

async function bootstrap() {
  const logger = new PinoLogger();

  const application = new RestApplication(logger);
  await application.init();
}

bootstrap();
