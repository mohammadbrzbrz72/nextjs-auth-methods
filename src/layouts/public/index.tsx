import Header from "./header";
import Footer from "./footer";

const styles = {
  root: `
    w-full
  `,
  wrapper: `
    web-layout
    flex flex-col justify-between
    min-h-screen
    mx-auto
  `,
  content: `
  `,
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
