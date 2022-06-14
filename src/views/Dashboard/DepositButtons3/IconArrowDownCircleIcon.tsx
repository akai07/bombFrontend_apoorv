import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const IconArrowDownCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 2.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5Z'
      fill='#fff'
      stroke='#E8E8E8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.5 11 11 7.5 7.5 11' stroke='url(#prefix__a)' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11 14.5v-7' stroke='url(#prefix__b)' strokeLinecap='round' strokeLinejoin='round' />
    <defs>
      <linearGradient id='prefix__a' x1={14.5} y1={7.5} x2={15.543} y2={13.736} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
      <linearGradient id='prefix__b' x1={11} y1={7.5} x2={15.632} y2={9.479} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(IconArrowDownCircleIcon);
export { Memo as IconArrowDownCircleIcon };
