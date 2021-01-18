    import React, {useState, useEffect} from 'react';
    import axios from "axios";

    const App = () => {

        //1. 데이터 담을공간 useState함수가 데이터를 담을 함수
        const [articles, setArticles] = useState([])
        const [loading, setLoading] = useState(true)

        //3. 네트워킹 함수[axios import시 fetch("url")생략가능]
            const getData = async () => {
                return (
                    await axios.get('http://www.findyourapi.com/api/posts/')
                        //.then(aaa => console.log(aaa))
                        .then(aaa => {
                            setArticles(aaa.data)
                            setLoading(false)
                        })
                        .catch(err => console.log(err))
                )
            }

        //2. 자동실행함수 (페이지가 보여주면 바로실행되는함수 useEffect)
        useEffect(() => {
            getData()
        },[])


        return (
            <>
                {loading ?
                    <div>
                        <h1>
                            loading ...
                        </h1>
                    </div>
                    : (
                            <div>
                                {articles.map(article => (
                                    <>
                                    <h1>author_name : {article.author_name}</h1>
                                    <h2>author_email : {article.author_email}</h2>
                                    <h3>title : {article.title}</h3>
                                    <h4>overview : {article.overview}</h4>
                                    <h5>content : {article.content}</h5>
                                </>
                                ))}
                            </div>
                        )
                    }
                    </>

        );
    };

    export default App ;
