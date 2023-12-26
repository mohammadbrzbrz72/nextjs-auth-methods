import React from "react";

const styles = {
  root: `
    w-full h-[52px]
    rounded-2xl border border-violet-100
  `,
};
export const OAuthButton = () => {
  return (
    <div className={styles.root + " "}>
      <div></div>
    </div>
  );
};
