import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse241Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 77 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M76.288 21.914A76.919 76.919 0 0 1 .012 9.3L7.416.338a65.292 65.292 0 0 0 64.747 10.707l4.125 10.869Z'
      fill='#00ADE8'
    />
  </svg>
);

const Memo = memo(Ellipse241Icon);
export { Memo as Ellipse241Icon };
