import clsx from 'clsx';
import React from 'react';

type titleColors = 'teal' | 'pink';
export function Title(props: {
  text: string;
  className?: string;
  color: titleColors;
}) {
  const { text, className, color } = props;
  return (
    <div className={clsx(`text-xl font-bold text-${color}`, className)}>
      {text}
    </div>
  );
}
