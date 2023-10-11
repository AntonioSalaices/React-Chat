import React from 'react';
import styles from './Loader.module.scss';

const Loader = (props: any): React.ReactElement => {
  const { ...rest } = props;

  return (
    <section className={styles.example} aria-label="loader" {...rest}>
      {' '}
      {props.children}
    </section>
  );
};

Loader.displayName = 'Loader';

const Bar = (props: any): React.ReactElement => {
  const { ...rest } = props;

  return (
    <section className={styles.meter} {...rest}>
      <span style={{ width: props.width }}>
        <span className={styles.loader}></span>
      </span>
    </section>
  );
};

Bar.displayName = 'LoaderBar';
Loader.Bar = Bar;

interface SpinnerProps {
  tsize?: 'large' | 'medium' | 'small';
}

const Spinner = (props: SpinnerProps): React.ReactElement => {
  const { tsize, ...rest } = props;

  return (
    <svg className={`${styles['spinner']} ${styles[`spinner--${tsize}`]}`} viewBox="0 0 50 50" {...rest}>
      <circle className={styles['spinner__path']} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  );
};

Spinner.displayName = 'Spinner';
Loader.Spinner = Spinner;

export { Loader };
