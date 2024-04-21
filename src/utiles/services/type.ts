export interface axiosHeader {
  "content-type"?: string;
  "Accept"?: string;
  "Accept-Language"?: string;
}

export interface axiosResult {
  status: string;
  totalResults: number;
}

export interface Articles extends axiosResult {
  articles: Article[]
}

export interface Article {
  id: string;
  publishedAt: EpochTimeStamp;
  description: string;
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  urlToImage: string;
}