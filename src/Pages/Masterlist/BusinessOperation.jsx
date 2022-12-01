import React from "react";
import { useGetBusinessModelQuery } from "../../Redux/Query/businessModelApi";

const BusinessOperation = () => {
  const { data: businessModel, isLoading: businessModelLoading } =
    useGetBusinessModelQuery();
  console.log(businessModel);
  console.log(businessModelLoading);

  return (
    <>
      <div>BusinessOperation</div>
    </>
  );
};

export default BusinessOperation;
