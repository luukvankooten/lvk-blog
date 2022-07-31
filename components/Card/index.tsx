import styles from "./Card.module.scss";

type CardType = | "small" | "medium" | "big"

interface CardProps {
	type?: CardType,
}

export default function Card({type}: CardProps) {
  return <div className={styles.card}>Hello world</div>;
}
