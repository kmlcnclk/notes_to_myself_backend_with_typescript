import pino from 'pino';
import pretty from 'pino-pretty';

const log = pino(
  pretty({
    colorize: true,
  })
);

export default log;
