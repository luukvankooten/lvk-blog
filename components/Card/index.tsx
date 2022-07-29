import styles from "./Card.module.scss";

type CardType = | "small" | "medium" | "big"

interface CardProps {

}


export default function Card() {
  return <div className={styles.card}>Hello world</div>;
}
