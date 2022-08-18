import styles from "./Outlet.module.scss";
import logo from "../../public/logo.svg";
import Image from "next/image";
import bg from "../../public/IMG_0656.jpg";

interface OutletProps {
  children?: JSX.Element;
}

export default function Outlet({ children }: OutletProps) {
  return (
    <div className={styles.outlet}>
      <div className={styles.outside}>
        <Image src={bg.src} layout="fill" objectFit="cover" alt="background image of website" />
        <div className={styles.inner}>
          <div className={styles.header}>
            <Image src={logo.src} alt="logo" height={40} width={100} />	
          </div>

          <div className={styles.divider}>
            <div className={styles.dividerCornerTopLeft}></div>
            <div className={styles.dividerCornerTopRight}></div>
            <div className={styles.dividerCornerBottomRight}></div>
            <div className={styles.dividerCornerBottomLeft}></div>
          </div>

          <div className={styles.childeren}>
            {children}
          </div>
        </div>
				
      </div>
    </div>
  );
}