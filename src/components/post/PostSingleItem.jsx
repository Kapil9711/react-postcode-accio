const SinglePostOfficeItem = ({ singlePost }) => {
  const { Name, BranchType, DeliveryStatus, District, Division } = singlePost;

  return (
    <div className=" border-2 rounded border-black min-h-96 p-12">
      <p className="text-3xl  mb-8">
        Name:
        <span className="font-light pl-5">{Name}</span>
      </p>
      <p className="text-3xl  mb-8">
        Branch Type:
        <span className="font-light pl-5">{BranchType}</span>
      </p>
      <p className="text-3xl  mb-8">
        Delivery Status:
        <span className="font-light pl-5">{DeliveryStatus}</span>
      </p>
      <p className="text-3xl  mb-8">
        District:<span className="font-light pl-5">{District}</span>
      </p>
      <p className="text-3xl  mb-8">
        Division:
        <span className="font-light pl-5">{Division}</span>
      </p>
    </div>
  );
};

export default SinglePostOfficeItem;
