import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const IconArrowDownCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 21 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.5 20.18a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Z'
      fill='#fff'
      stroke='#E8E8E8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='m7 11.43 3.5 3.5 3.5-3.5' stroke='url(#prefix__a)' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 7.93v7' stroke='url(#prefix__b)' strokeLinecap='round' strokeLinejoin='round' />
    <defs>
      <linearGradient id='prefix__a' x1={7} y1={14.93} x2={5.957} y2={8.694} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
      <linearGradient id='prefix__b' x1={10.5} y1={14.93} x2={5.868} y2={12.951} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(IconArrowDownCircleIcon);
export { Memo as IconArrowDownCircleIcon };
