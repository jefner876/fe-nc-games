import { useContext } from "react";
import { UserContext } from "../contexts/User";
import styles from "./Header.module.css";
const { userAvatar, userInfo, username } = styles;

export const UserInfoCard = () => {
  const { user } = useContext(UserContext);
  return (
    <section className={userInfo}>
      <img
        className={userAvatar}
        src={user.avatar_url}
        alt={`avatar for ${user.username}`}
      />
      <p className={username}>{user.username}</p>
      <button>Log Out</button>
    </section>
  );
};
