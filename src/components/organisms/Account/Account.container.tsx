import React, { useEffect, useState } from 'react';
import AccountView from './Account.view';

const AccountContainer = () => {
  const onWithdrawal = () => {};
  const onChangePassword = () => {};
  return <AccountView onPropChangePassword={onChangePassword} onPropWithdrawal={onWithdrawal} />;
};

export default AccountContainer;
