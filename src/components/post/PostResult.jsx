import { useState } from "react";
import FilterPost from "./FilterPost";
import PostOfficeList from "./PostItemList";

const Result = ({ data, pincode }) => {
  const [searchStr, setSearchStr] = useState("");
  const { Message, PostOffice } = data[0];
  const filteredPost = PostOffice.filter(({ Name }) =>
    Name.toLowerCase().includes(searchStr.toLowerCase())
  );
  return (
    <>
      <FilterPost {...{ Message, pincode, setSearchStr }} />
      {filteredPost.length === 0 && (
        <p className="text-4xl mt-12 py-12">
          Couldn’t find the postal data you’re looking for…
        </p>
      )}
      {PostOffice && <PostOfficeList PostOffice={filteredPost} />}
    </>
  );
};

export default Result;
