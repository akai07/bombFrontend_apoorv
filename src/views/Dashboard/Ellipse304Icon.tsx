import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse304Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={15.914} cy={16} r={15.455} fill='#fff' />
  </svg>
);

const Memo = memo(Ellipse304Icon);
export { Memo as Ellipse304Icon };
