import { useCounter, useFetch } from "../hooks";
import { ErrorQuote, LoadingQuote, Quote } from "../examples";

export const Layout = () => {
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
