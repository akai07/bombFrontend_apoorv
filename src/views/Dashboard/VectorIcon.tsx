import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1 10.309 5.03 6 1 1.691' stroke='#9EE6FF' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
