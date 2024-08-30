import "./globals.css";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/Navbar/NavBar";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import BottomMenu from "@/components/BottomMenu/BottomMenu";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-[#151515] text-white overflow-x-hidden">
        <StoreProvider>
          <NavBar />
          <main className="px-[10px] lg:px-10 max-w-[480px] m-auto lg:flex lg:max-w-[1920px]">
            <Menu />
            <section className="flex-grow">
              <Header />
              {children}
            </section>
          </main>
          <BottomMenu />
        </StoreProvider>
      </body>
    </html>
  );
}
