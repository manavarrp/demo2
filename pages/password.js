import React from 'react';

import Password from '../components/password/Password';

const password = () => {
  return <Password />;
};

export default password;

password.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
