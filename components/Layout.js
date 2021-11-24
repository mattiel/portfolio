import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

const Layout = ({ children, dark, title }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title ? title : "Mattie Lee"}</title>
        <meta property="og:title" content={title ? title : "Mattie Lee"} key="title" />
        <meta
          name="theme-color"
          content={dark ? "#171717" : "#2563eb"}
          key="theme-color"
        />
      </Head>
      <div
        className="absolute -left-5 w-full max-w-screen-xl top-0 h-full mx-5 border-l border-r border-dashed border-gray-500 border-opacity-10 pointer-events-none flex justify-evenly items-start"
        style={{ zIndex: -1 }}
      >
        <div
          className="ml-2 h-full border-l border-dashed border-gray-500 border-opacity-10 hidden md:block"
          style={{ width: "1px" }}
        ></div>
      </div>
      <Navbar dark={dark} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
