import SinglePostOfficeItem from "./PostSingleItem";

const PostOfficeList = ({ PostOffice }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-10  py-16">
      {PostOffice?.map((item) => (
        <SinglePostOfficeItem key={item.Name} singlePost={item} />
      ))}
    </div>
  );
};

export default PostOfficeList;
