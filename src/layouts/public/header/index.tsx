import Link from "next/link";

import LinkBox from "./LinkBox";
import { Button } from "@/components";
import Image from "next/image";

const styles = {
  header: `
    py-5
  `,
  separate: `
    flex items-center justify-between
  `,
  linkBox: `
    gap-6
  `,
  buttonBox: `
    gap-3
  `,
  homeLink: `
    flex flex-col gap-1 items-center
    font-bold font-mono
  `,
};

const Header = () => {
  return (
    <header className={styles.separate + styles.header}>
      <Link href="/">
        <div className={styles.homeLink}>
          <Image
            src="/images/ecommerce/header/natural-flower-logo.png"
            alt="matina logo"
            width={75}
            height={75}
          />
          <span>matina</span>
        </div>
      </Link>
      <div className={styles.separate + styles.linkBox}>
        <LinkBox />
        <div className={styles.separate + styles.buttonBox}>
          <Link href={"/signin"}>
            <Button type="secondary">Sign In</Button>
          </Link>
          <Link href={"/signup"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
