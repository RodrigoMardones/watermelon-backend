export default class EnvironmentManager{
    public environment: string;
    private secrets: any;
    constructor(environment:string){
        this.environment = environment;
        this.secrets = {
            development: {
                PORT: process.env.PORT,
                PORT_REDIS: process.env.REDIS,
                REDIS_PASSWORD: process.env.REDIS_PASSWORD,
                HASH_KEY: process.env.HASH_KEY
            },
            production: {
                PORT: process.env.PORT,
                PORT_REDIS: process.env.REDIS,
                REDIS_PASSWORD: process.env.REDIS_PASSWORD,
                HASH_KEY: process.env.HASH_KEY
            }
        }
    }
    public getEnv():any{
        return this.secrets[this.environment];
    }
}