import { FaSearch } from "react-icons/fa";
const FilterPost = ({ pincode, Message, setSearchStr }) => {
  return (
    <>
      <h1 className="text-4xl my-9">
        Pincode:{"  "}
        {pincode}
      </h1>

      <p className="text-4xl mb-10 ">
        Message:{"  "}
        <span className="font-light"> {Message}</span>
      </p>

      <div className="relative">
        <FaSearch className="absolute left-3 top-4 " />
        <input
          onChange={(e) => setSearchStr(e.target.value)}
          type="text"
          placeholder="Filter"
          className="placeholder:text-black input border border-black border-x-4 border-y-2 w-full pl-8"
        />
      </div>
    </>
  );
};

export default FilterPost;
