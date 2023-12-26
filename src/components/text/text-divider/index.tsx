import clsx from "clsx";
import React from "react";

interface ITextDivider {
  data: string[];
  className?: string;
}

const styles = {
  root: `
    flex gap-2 px-2
  `,
  line: `
    block flex-1
  `,
  text: `
    text-neutral-600 text-base font-normal
  `,
};

export const TextDivider: React.FC<ITextDivider> = ({ data, className }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <span className={styles.line} />
      {/*
       //TODO: Set a more line if the length of text more than one.
      */}
      {data.map((data) => (
        <span key={data} className={styles.text}>
          {data}
        </span>
      ))}
      <span className={styles.line} />
    </div>
  );
};
