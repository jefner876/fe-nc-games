import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Title } from "./components/Title";
import { UserInfoCard } from "./components/UserInfoCard";
import { UserContext } from "./contexts/User";
import styles from "./modules/Header.module.css";
import { CategoryHandler } from "./components/CategoryHandler";
const { Header } = styles;

function App() {
  const [user] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <header className={Header}>
          <Title />
          <Nav />
          <UserInfoCard />
        </header>
        <main>
          <CategoryHandler />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
