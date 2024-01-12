import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>this is header</header>
      {children}
      <footer>this is footer</footer>
    </>
  );
}

export default Layout;
