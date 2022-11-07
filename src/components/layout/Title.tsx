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
    <div className={clsx(`text-xl font-bold`, className, getColor(color))}>
      {text}
    </div>
  );
}

function getColor(color: titleColors) {
  if (color === 'pink') {
    return 'text-pink';
  }
  if (color === 'teal') {
    return 'text-teal';
  }
}
