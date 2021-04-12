import { useState, useEffect } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('loading...')
        setData(null);
        setError(null);
        setTimeout(() => {
            fetch(`${url}`)
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setData(res.content)
            })
            .catch(err => {
                setLoading(false)
                setError('An error occured. Awkward..')
            })
        }, 1000)
    }, [url])

    return {data, loading, error}
}

export default useFetch;