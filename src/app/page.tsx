import BottomMenu from "../components/BottomMenu/BottomMenu";
import GameList from "../components/Main/GameList";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import NavBar from "../components/Navbar/NavBar";
import RootLayout from "./layout";

export default function HomePage() {
  return (
    <RootLayout>
      <NavBar />
      <main className="px-[10px] lg:px-10 max-w-[480px] m-auto lg:flex lg:max-w-[1920px]">
        <Menu />
        <section className="flex-grow">
          <Header />
          <GameList />
        </section>
      </main>
      <BottomMenu />
    </RootLayout>
  );
}
