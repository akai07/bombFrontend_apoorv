import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const IconShoppingCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M4.453 10.876a.457.457 0 1 0 0-.915.457.457 0 0 0 0 .915Z' stroke='url(#prefix__b)' strokeWidth={1.5} />
      <path d='M9.485 10.876a.457.457 0 1 0 0-.915.457.457 0 0 0 0 .915Z' stroke='url(#prefix__c)' strokeWidth={1.5} />
      <path
        d='M.793 1.269h1.83l1.226 6.125a.915.915 0 0 0 .915.737H9.21a.915.915 0 0 0 .915-.737l.732-3.838H3.08'
        stroke='url(#prefix__d)'
      />
    </g>
    <defs>
      <linearGradient id='prefix__b' x1={3.995} y1={10.876} x2={3.491} y2={9.369} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
      <linearGradient id='prefix__c' x1={9.027} y1={10.876} x2={8.523} y2={9.369} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
      <linearGradient id='prefix__d' x1={0.793} y1={8.131} x2={-1.931} y2={-3.816} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#149EE3' />
        <stop offset={1} stopColor='#5DFDB0' />
      </linearGradient>
      <clipPath id='prefix__a'>
        <path fill='#fff' transform='translate(.335 .811)' d='M0 0h10.979v10.979H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(IconShoppingCartIcon);
export { Memo as IconShoppingCartIcon };
