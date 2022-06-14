import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse286Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={9} cy={9} r={9} fill='#373747' />
  </svg>
);

const Memo = memo(Ellipse286Icon);
export { Memo as Ellipse286Icon };
