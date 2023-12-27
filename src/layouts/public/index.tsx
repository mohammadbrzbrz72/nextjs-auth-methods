import React from "react";

import Header from "./header";
import Footer from "./footer";

const styles = {
  root: `
    w-full h-screen
  `,
  wrapper: `
    web-layout
    mx-auto
    border
  `,
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
