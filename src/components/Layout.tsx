import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="min-h-[85vh] bg-gray-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
