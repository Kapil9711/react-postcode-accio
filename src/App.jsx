import { useState } from "react";
import Search from "./components/post/PostSearch";
import { useEffect } from "react";
import Result from "./components/post/PostResult";

let errorMsg = "";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({ str: "" });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (str) => {
    setIsError(false);
    if (str.length < 6) {
      setTimeout(() => {
        setIsError(true);
      }, 1);
      errorMsg = "code is not 6 digits";
      return;
    }
    setIsLoading(true);
    setQuery({ str });
  };

  useEffect(() => {
    if (query.str.length === 0) return;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.postalpincode.in/pincode/${query.str}`
        );

        const data = await res.json();
        console.log(data);
        if (data[0].Status !== "Success") {
          setIsError(true);
          setIsLoading(false);
          errorMsg = "The requested resource is not found";
          return;
        }
        setIsLoading(false);
        setData(data);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        errorMsg = "Failed to fetch";
      }
    };
    setTimeout(fetchData, 1000);
  }, [query]);

  return (
    <div className="container mx-auto">
      {data.length === 0 ? (
        <Search {...{ handleSearch, isError, isLoading, errorMsg }} />
      ) : (
        <Result data={data} pincode={query.str} />
      )}
    </div>
  );
};

export default App;
