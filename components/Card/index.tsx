import Image, { StaticImageData } from 'next/image';

import styles from './Card.module.scss';

type CardType = | 'small' | 'medium' | 'big'

interface CardProps {
	type?: CardType,
	onClick?: React.MouseEventHandler<HTMLElement>
	image?: StaticImageData,
	swap?: boolean;
	children: JSX.Element | string;
	text?: string;
}

export default function Card({ type = 'medium', onClick, image, swap = false, children, text = '🔗' }: CardProps) {
	const size = {
		small: styles.small,
		medium: styles.medium,
		big: styles.big,
	}

	let classNames = [styles.card, size[type]];

	if (onClick !== undefined) {
		classNames.push(styles.action);
	}

	if (swap) {
		classNames.push(styles.swap);
	}

	return (
		<div className={classNames.join(' ')} onClick={onClick}>
			<div className={styles.left}>
				{(image && <Image layout="fill" objectFit="cover" src={image.src} alt="some" />) || <p className={styles.text}>{text}</p>}
			</div>
			<div className={styles.right}>{children}</div>
		</div>
	);
}
