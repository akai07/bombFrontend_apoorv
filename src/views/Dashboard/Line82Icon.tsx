import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Line82Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 542 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1h542' stroke='#C3C5CB' strokeOpacity={0.75} strokeWidth={0.5} />
  </svg>
);

const Memo = memo(Line82Icon);
export { Memo as Line82Icon };
