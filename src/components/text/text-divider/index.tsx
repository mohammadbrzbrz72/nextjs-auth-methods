import clsx from "clsx";

import styles from "./styles";
import type { ITextDivider } from "./types";

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
