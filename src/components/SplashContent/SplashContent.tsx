import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.scss';
// import '../../../src/globals.css';

export interface SplashContentProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  centerColor?: string;
  leftColor?: string;
  rightrColor?: string;
  time?: number;
}

export const SplashContent = ({
  children,
  centerColor,
  leftColor,
  rightrColor,
  time,
  className,
  style,
  ...props
}: SplashContentProps) => {
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={
        {
          '--center-color': centerColor,
          '--right-color': rightrColor,
          '--left-color': leftColor,
          '--time': time ? `${time}s` : undefined,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};
