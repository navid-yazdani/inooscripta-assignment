/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_NEWS_API_BASE_URL: string
    readonly VITE_NEWS_AI_API_BASE_URL: string
    readonly VITE_GUARDIAN_BASE_URL: string
    readonly VITE_NEWS_API_KEY: string
    readonly VITE_NEWS_AI_API_KEY: string
    readonly VITE_GUARDIAN_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}