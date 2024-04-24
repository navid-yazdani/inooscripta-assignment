import {request} from '../config/publicRequest.ts';
import {queryParams} from "../type.ts";

const News = {
  getNews(baseUrl: string, params: object) {
    return request.get<queryParams>(baseUrl, params)
  },
};

export default News;
