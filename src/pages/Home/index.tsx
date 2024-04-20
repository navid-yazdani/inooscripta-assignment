  import {FC, ReactElement, useEffect} from 'react';
  import {News} from "../../utiles/services";
  import {formatSearchParams, removeObjectEmptyValue} from "../../utiles/common";
  import {useSearchParams} from "react-router-dom";
  import qs from 'qs';

const Index: FC = (): ReactElement => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getArticles();
  }, []);


  const getArticles = () => {
    News.getNews().then(res => {
      console.log(res)
    })
  }

  return (
    <div>
      asdadad
    </div>
  );
};

export default Index;
