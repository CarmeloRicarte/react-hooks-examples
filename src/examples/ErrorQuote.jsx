import PropTypes from "prop-types";

export const ErrorQuote = ({ error }) => {
  return <div className="alert alert-danger text-center"> {error.message}</div>;
};

ErrorQuote.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};
