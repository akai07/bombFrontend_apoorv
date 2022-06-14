import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse244Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 55 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M54.836 2.85A76.918 76.918 0 0 1 4.663 62.51L.767 51.5A65.24 65.24 0 0 0 43.322.9l11.514 1.95Z'
      fill='url(#prefix__a)'
    />
    <defs>
      <linearGradient id='prefix__a' x1={39.493} y1={-57.507} x2={-109.628} y2={-75.668} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#00E8A2' />
        <stop offset={1} stopColor='#00ADE8' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse244Icon);
export { Memo as Ellipse244Icon };
