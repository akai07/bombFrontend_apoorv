import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.797 18.595A8.797 8.797 0 1 0 9.797 1a8.797 8.797 0 0 0 0 17.595Z'
      fill='#fff'
      stroke='#E8E8E8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
