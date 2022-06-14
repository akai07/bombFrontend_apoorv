import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse246Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 88 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M.124 9.498a76.918 76.918 0 0 1 87.526 9.615l-7.58 8.662A65.408 65.408 0 0 0 5.642 19.6L.124 9.498Z'
      fill='url(#prefix__a)'
    />
    <defs>
      <linearGradient id='prefix__a' x1={97.493} y1={29.493} x2={-51.628} y2={11.332} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#00E8A2' />
        <stop offset={1} stopColor='#00ADE8' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse246Icon);
export { Memo as Ellipse246Icon };
