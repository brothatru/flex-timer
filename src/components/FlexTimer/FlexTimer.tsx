import React from 'react';
import styles from './FlexTimer.module.scss';

type MilliSeconds = number;

export type FlexTimerProps = {
  progressBarColor?: string;
  duration?: MilliSeconds;
  showDuration?: boolean;
};

export const FlexTimer = (props: FlexTimerProps) => {
  const [duration, setDuration] = React.useState<MilliSeconds>(props.duration || 5000);
  const [timeLeft, setTimeLeft] = React.useState<MilliSeconds>(duration);
  const [timePassed, setTimePassed] = React.useState<MilliSeconds>(0);
  const [circleDashArray, setCircleDashArray] = React.useState<number>(
    (timeLeft / duration) * 283,
  );

  const isPaused = React.useRef(false);
  const timerInterval = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (props.duration > 0) {
      setDuration(props.duration);
    }
  }, [props.duration]);

  React.useEffect(() => {
    setCircleDashArray((timeLeft / duration) * 283);
  }, [timeLeft]);

  React.useEffect(() => {
    switch (true) {
      case timePassed > duration && timeLeft === 0: {
        clearInterval(timerInterval.current);
        break;
      }
      case !isPaused.current: {
        setTimeLeft(duration - timePassed);
        break;
      }
    }
  }, [timePassed]);

  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    switch (true) {
      case !timerInterval.current ||
        (timePassed === 0 && timeLeft === duration && circleDashArray === 283):
        startTimer();
        break;

      case timeLeft <= 0:
        setCircleDashArray(283);
        setTimeLeft(duration);
        setTimePassed(0);
        clearInterval(timerInterval.current);
        break;

      default:
        isPaused.current = !isPaused.current;
    }
  };

  const startTimer = () => {
    timerInterval.current = setInterval(() => {
      if (!isPaused.current) {
        setTimePassed((timePassed) => timePassed + 50);
      }
    }, 50);
  };

  return (
    <div className={styles.flexTimer} data-cy='flex-timer'>
      <svg className={styles.progressRing} viewBox='0 0 100 100' onClick={handleClick}>
        <g className={styles.circleContainer}>
          <circle
            className={styles.timerProgress}
            strokeWidth={8}
            fill='transparent'
            cx='50'
            cy='50'
            r='45'
            style={{ stroke: props.progressBarColor || 'black' }}
          ></circle>
          <path
            strokeDasharray={`${circleDashArray} 283`}
            className={`${styles.circle} ${
              circleDashArray === 283 ? styles.circleReverseAnimation : ''
            }`}
            d='
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
            '
            data-cy='circle-progress-bar'
          ></path>
        </g>
      </svg>
      {props.showDuration && <div>{(timeLeft / 1000).toFixed(2)}</div>}
    </div>
  );
};
