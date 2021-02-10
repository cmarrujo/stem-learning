import React, {useState} from 'react';
import Link from 'next/link'
import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <Link href={`/${props.title.toLowerCase()}`}>
      <a className={styles.wrapper}>
        <div className={styles.card}
            data-icon={props.icon}>
          <p className={styles.title}>{props.title}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card;