import {request} from '../config/publicRequest.ts';

const newsApi = import.meta.env.NEWS_API_BASE_URL;

const News = {
    getNews() {
        return request.get(newsApi + '/top-headlines' + '?apiKey=551d8f3a4b804e24b9096d7d98c57790')
    },
};

export default News;
