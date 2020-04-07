import { useState, useEffect } from 'react'

export const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
            } catch (error) {
                setData([])
                setError(error)
            }
            setLoading(false)
        }
        fetchResource()
    }, [url])

    return { data, loading, error }
}
