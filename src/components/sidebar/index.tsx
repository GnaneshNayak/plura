import { getAuthUserDetails } from '@/lib/queries';
import React from 'react';
import MenuOptions from './menu-options';

type Props = {
  id: string;
  type: 'agency' | 'subaccount';
};

const Sidebar = async ({ id, type }: Props) => {
  const user = await getAuthUserDetails();

  if (!user) return null;
  if (!user.Agency) return;

  const details =
    type === 'agency'
      ? user.Agency
      : user.Agency.SubAccount.find((sub) => sub.id === id);

  const isWhiteLabeledAgency = user.Agency.whiteLabel;
  if (!details) return;

  let sidebarLogo = user.Agency.agencyLogo || '/assets/plura-logo';

  if (!isWhiteLabeledAgency) {
    if (type === 'subaccount') {
      sidebarLogo =
        user.Agency.SubAccount.find((sub) => sub.id === id)?.subAccountLogo ||
        user.Agency.agencyLogo;
    }
  }
  const sidebarOpt =
    type === 'agency'
      ? user.Agency.SidebarOption || []
      : user.Agency.SubAccount.find((sub) => sub.id === id)?.SidebarOption ||
        [];

  const subAccounts = user.Agency.SubAccount.filter((sub) =>
    user.Permissions.find((prem) => prem.id === sub.id && prem.access),
  );
  return (
    <>
      <MenuOptions
        defaultOpen={true}
        details={details}
        sidebarLogo={sidebarLogo}
        sidebarOpt={sidebarOpt}
        subAccounts={subAccounts}
        id={id}
        user={user}
      />
      <MenuOptions
        details={details}
        sidebarLogo={sidebarLogo}
        sidebarOpt={sidebarOpt}
        subAccounts={subAccounts}
        id={id}
        user={user}
      />
    </>
  );
};

export default Sidebar;
