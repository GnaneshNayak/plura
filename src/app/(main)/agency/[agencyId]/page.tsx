import React from 'react';

const Page = ({
  params,
}: {
  params: {
    agencyId: string;
  };
}) => {
  console.log(params);
  return <div>Page {params.agencyId}</div>;
};

export default Page;
