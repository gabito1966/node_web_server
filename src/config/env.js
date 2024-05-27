import env from 'dotenv'
import { get } from 'env-var'

env.config()


export const envs = {
    PORT:get('PORT').required().asPortNumber(),
    PUBLIC_PATH:get('PUBLIC_PATH').default('public').asString()
}

