import Image from "next/image";

import type { IOAuthButton } from "./types";
import styles from "./styles";

export const OAuthButton: React.FC<IOAuthButton> = ({
  name,
  src,
  alt,
  width,
  height,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <Image src={src} alt={alt} width={30 ?? width} height={30 ?? height} />
        <div className={styles.textBox}>
          <span>Login with </span>
          <strong className={styles.name}>{name}</strong>
        </div>
      </div>
    </div>
  );
};
