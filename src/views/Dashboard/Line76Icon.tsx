import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Line76Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 128 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1h128' stroke='#C3C5CB' strokeOpacity={0.75} strokeWidth={0.5} />
  </svg>
);

const Memo = memo(Line76Icon);
export { Memo as Line76Icon };
