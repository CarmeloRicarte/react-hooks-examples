import { useCounter, useFetch } from "../hooks";
import { ErrorQuote, LoadingQuote, Quote } from "./";

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
export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data.length > 0 && data[0];
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      {error && <ErrorQuote />}
      <button
        onClick={() => increment()}
        type="button"
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};
