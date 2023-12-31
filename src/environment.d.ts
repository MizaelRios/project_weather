declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_BASE_URL: string
            NEXT_PUBLIC_API_KEY: string
            NODE_ENV: 'development' | 'production';
        }
    }
}

export { };