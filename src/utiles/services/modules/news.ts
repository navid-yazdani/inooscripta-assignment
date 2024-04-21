import {request} from '../config/publicRequest.ts';
import {Articles} from "../type.ts";

const News = {
    getNews(params) {
        console.log(params)
        return request.get<Articles>('/top-headlines' + '?sources=bbc-news&apiKey=551d8f3a4b804e24b9096d7d98c57790')
    },
};

export default News;
