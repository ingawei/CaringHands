import * as React from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsx from 'clsx';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { children, className, variant = 'primary', isDarkBg = false, ...rest },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsx(
          'text-purple focus:text-orange focus:underline',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
