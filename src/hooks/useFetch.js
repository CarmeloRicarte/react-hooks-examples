import { useEffect, useState } from "react"

/**
 * We're using the useEffect hook to make a fetch request to the url we defined earlier. If the request
 * is successful, we set the data in state to the data we received from the request. If the request
 * fails, we set the error in state to the error we received
 * @param url - The url we want to fetch data from
 * @returns {
 *         data: state.data,
 *         isLoading: state.isLoading,
 *         error: state.error
 *     }
 */
export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })

        try {
            const response = await fetch(url)
            const data = await response.json();
            setState({ data, isLoading: false, error: null })

        } catch (err) {
            setState({
                ...state,
                isLoading: false,
                error: err,
            })
        }

    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    }
}
