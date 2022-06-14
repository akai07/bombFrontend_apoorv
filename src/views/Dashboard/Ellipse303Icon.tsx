import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse303Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16.342} cy={15.818} r={15.455} fill='#fff' />
  </svg>
);

const Memo = memo(Ellipse303Icon);
export { Memo as Ellipse303Icon };
