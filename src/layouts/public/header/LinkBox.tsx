"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

const styles = {
  root: `
    grid grid-flow-col gap-5
    
  `,
  link: `
  
  `,
  activeLink: `
    text-indigo-600 font-bold
  `,
};

const LinkBox = () => {
  const pathname = usePathname();

  return (
    <div className={styles.root}>
      {pages.map((data) => {
        return (
          <Link
            key={data.path}
            className={clsx(
              styles.link,
              pathname.startsWith(data.path) && styles.activeLink
            )}
            href={data.path}
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
};

export default LinkBox;
