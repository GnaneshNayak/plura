import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async () => {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  return <div>Agency dashboard</div>;
};

export default Page;
