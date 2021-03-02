import {useState, useEffect} from 'react'

function useFetch(url, tags = ''){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl(){
        const urlSafe = new URL(url);
        const params = tags;

        urlSafe.search = new URLSearchParams(params).toString();

        const response = await fetch(urlSafe);
        console.log('response', response);
        const json = await response.json();
        console.log('json', json);

        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return [data, loading];
}

export {useFetch};