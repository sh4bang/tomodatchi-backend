import type { AppEnv } from '../configs/index.js'

export const envToLogger: Record<AppEnv, boolean | object> = {
  dev: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  prod: true,
  test: false,
}