import styles from './Button.module.css';

export function ButtonCss(props) {
  const { color = 'primary' } = props;

  return (
    <button className={`${styles.button} ${styles[color]}`}>
      Enviar
    </button>
  );
}
