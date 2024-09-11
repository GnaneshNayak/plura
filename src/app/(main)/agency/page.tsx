import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async () => {
  const agencyId = await verifyAndAcceptInvitation();
  console.log(agencyId);

  const user = getAuthUserDetails();

  return <div>Agency dashboard</div>;
};

export default Page;
