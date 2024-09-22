import {
  getNotificationAndUser,
  verifyAndAcceptInvitation,
} from '@/lib/queries';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';
import Unauthorized from '../unauthorized/page';
import Sidebar from '@/components/sidebar';
import BlurPage from '@/components/global/blur-page';

type Props = {
  children: ReactNode;
  params: {
    agencyId: string;
  };
};

const Layout = async ({ children, params }: Props) => {
  const agencyId = await verifyAndAcceptInvitation();
  const user = await currentUser();

  if (!user) redirect('/');
  if (!agencyId) redirect('/agency');

  if (
    user.privateMetadata.role !== 'AGENCY_OWNER' &&
    user.privateMetadata.role !== 'AGENCY_ADMIN'
  ) {
    return <Unauthorized />;
  }

  let allNoti: any = [];
  const notification = await getNotificationAndUser(agencyId);
  if (notification) allNoti = notification;

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar id={params.agencyId} type="agency" />
      <div className="md:pl-[300px]">
        <div className="relative">
          <BlurPage>{children}</BlurPage>
        </div>
      </div>
    </div>
  );
};

export default Layout;
