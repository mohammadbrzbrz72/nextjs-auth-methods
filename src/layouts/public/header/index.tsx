import { Button } from "@/components";
import Link from "next/link";

const styles = {
  header: `
    py-5
  `,
  separate: `
    flex items-center justify-between
  `,
};

const Header = () => {
  return (
    <header className={styles.separate + styles.header}>
      <div>Logo</div>
      <div className={styles.separate}>
        <div>links</div>
        <div className={styles.separate}>
          <Link href={"/signin"}>
            <Button>Sign In</Button>
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
