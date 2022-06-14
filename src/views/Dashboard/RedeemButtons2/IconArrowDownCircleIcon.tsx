import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const IconArrowDownCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.623 20.05a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Z'
      fill='#fff'
      stroke='#E8E8E8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='m7.123 11.3 3.5 3.5 3.5-3.5' stroke='url(#prefix__a)' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.623 7.8v7' stroke='url(#prefix__b)' strokeLinecap='round' strokeLinejoin='round' />
    <defs>
      <linearGradient id='prefix__a' x1={7.123} y1={14.801} x2={6.08} y2={8.565} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
      <linearGradient id='prefix__b' x1={10.623} y1={14.801} x2={5.991} y2={12.822} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(IconArrowDownCircleIcon);
export { Memo as IconArrowDownCircleIcon };
