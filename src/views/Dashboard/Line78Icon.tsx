import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Line78Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 1045 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1h1045' stroke='#00ADE8' strokeWidth={0.5} />
  </svg>
);

const Memo = memo(Line78Icon);
export { Memo as Line78Icon };
