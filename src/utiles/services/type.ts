export interface queryParams {
  response?: {
   results?: article[]
  }
  articles?: article[] | {
    results?: article[]
  }
}

export type article = {
  author: string | undefined
  authors?: string[]
  title: string
  description: string
  image?: string
  publishedAt: string
  source: {
    name?: string,
    title?: string
  },
  urlToImage?: string,
  body?: string,
  webTitle?: string,
  webPublicationDate?: string
}

export type params = {
  [key: string]: string
}