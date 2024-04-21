/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly NEWS_API_BASE_URL: string
    readonly NEWS_API_AI_BASE_URL: string
    readonly GUARDIAN_BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}