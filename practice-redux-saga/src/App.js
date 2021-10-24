import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "./modules/user";
import * as S from "./App.styles";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  const users = useSelector((state) => state.user);
  console.log(users);

  return (
    <S.AppWrapper>
      <h1>Redux saga</h1>
      <div className="users">
        {users &&
          users.map((user) => (
            <div className="user" key={user.id}>
              <h4>name: {user.name}</h4>
              <p>email: {user.email}</p>
              <p>phone: {user.phone}</p>
            </div>
          ))}
      </div>
    </S.AppWrapper>
  );
}
