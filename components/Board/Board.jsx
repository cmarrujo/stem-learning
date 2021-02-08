import styles from './Board.module.scss';

const Board = ( {children} ) => {
  return <div className={styles.container}>{children}</div>
}

export default Board;