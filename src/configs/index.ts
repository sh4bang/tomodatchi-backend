import 'dotenv/config';

export type AppEnv = "prod" | "dev" | "test"

type Config = {
    port: number
    mongoUri: string
    appEnv: AppEnv
    jwtSecret: string
    jwtExpire: string
}

export const config: Config = {
    port: parseInt(process.env.PORT || '3000'),
    mongoUri: process.env.MONGO_URI || '',
    appEnv: process.env.APP_ENV as AppEnv || 'prod',
    jwtSecret: process.env.JWT_SECRET || '',
    jwtExpire: process.env.JWT_EXPIRE || '15m'
};