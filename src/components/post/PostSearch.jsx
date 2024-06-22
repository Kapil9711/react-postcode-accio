import { useRef } from "react";
import Loading from "../message/Loading";
import Error from "../message/Error";

const Search = ({ handleSearch, isLoading, isError, errorMsg }) => {
  const inputRef = useRef(null);
  let errorType = "alert-error";
  if (errorMsg === "code is not 6 digits") errorType = "alert-warning";

  return (
    <>
      <h1 className="text-5xl my-9">Enter Pincode</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Pincode"
        className="input border border-black border-x-4 border-y-2 w-full"
      />
      <button
        onClick={() => handleSearch(inputRef.current.value)}
        className="btn btn-neutral btn-wide mt-9"
      >
        Lookup
      </button>

      {isLoading && <Loading />}
      {isError && <Error type={errorType} Children={errorMsg} />}
    </>
  );
};

export default Search;
