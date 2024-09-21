import { Button } from '@/components/ui/button';
import React from 'react';
import axios from 'axios';
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
