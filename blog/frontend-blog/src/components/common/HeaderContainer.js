import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { logout } from '../../modules/user';

export default function HeaderContainer() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
}
