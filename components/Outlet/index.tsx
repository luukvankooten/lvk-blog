import styles from "./Outlet.module.scss";
import logo from "../../public/logo.svg";
import Image from "next/image";
import bg from "../../public/IMG_0656.jpg";

interface OutletProps {
	title: string;
}

export default function Outlet({title}: OutletProps) {
	return (
		<div className={styles.outlet}>
			<div className={styles.outletOutside}>
				<Image className={styles.outletBackground} src={bg.src} layout="fill" alt="background image of website"/>
				<div className={styles.outletInner}>
					<div className={styles.outletHeader}>
						<Image src={logo.src} alt="logo" height={40} width={100}/>	
					</div>

					<div className={styles.outletDivider}>
						<div className={styles.outletDividerCornerTopLeft}></div>
						<div className={styles.outletDividerCornerTopRight}></div>
						<div className={styles.outletDividerCornerBottomRight}></div>
						<div className={styles.outletDividerCornerBottomLeft}></div>
					</div>
				</div>
				
			</div>
		</div>
	);
}