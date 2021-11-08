import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

export default function HeaderContainer() {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <Header user={user} />;
}
