import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Reviews } from "./components/Reviews";
import { Title } from "./components/Title";
import { UserInfoCard } from "./components/UserInfoCard";
import { UserContext } from "./contexts/User";
import styles from "./modules/Header.module.css";
const { Header } = styles;

function App() {
  const [user] = useState({
    username: "mallionaire",
    name: "haz",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Limes.jpg/1200px-Limes.jpg?20070108050319",
  });
  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        <header className={Header}>
          <Title />
          <Nav />
          <UserInfoCard />
        </header>
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
