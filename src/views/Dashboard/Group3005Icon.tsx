import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Group3005Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7} cy={7.5} r={7} fill='#373747' />
  </svg>
);

const Memo = memo(Group3005Icon);
export { Memo as Group3005Icon };
