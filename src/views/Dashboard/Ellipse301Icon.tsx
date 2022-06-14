import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse301Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 102 102' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={51} cy={51} r={51} fill='#23284B' />
  </svg>
);

const Memo = memo(Ellipse301Icon);
export { Memo as Ellipse301Icon };
