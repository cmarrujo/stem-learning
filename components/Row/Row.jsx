import styles from './Row.module.scss';

const Row = ( {children} ) => {
  return <div className={styles.container}>{children}</div>
}

export default Row;