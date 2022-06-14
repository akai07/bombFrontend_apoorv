import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse300Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 142 142' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={71} cy={71} r={71} fill='#16192A' fillOpacity={0.5} />
  </svg>
);

const Memo = memo(Ellipse300Icon);
export { Memo as Ellipse300Icon };
