import { Size, Variant } from '@/types/common';
import '../../../src/globals.css';
import './button.css';
import { ReactNode } from 'react';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  variant: Variant
  /** How large should the button be? */
  size?: Size;
  /** Button contents */

  children?: ReactNode
}

/** Primary UI component for user interaction */
export const Button = ({
  // primary = false,
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  // const mode = primary
    // ? 'storybook-button--primary'
    // : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={`storybook-button storybook-button--${size} bg-secondary`}
      {...props}
    >
      {children}
    </button>
  );
};
