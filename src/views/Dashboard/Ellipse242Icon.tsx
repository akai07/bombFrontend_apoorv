import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse242Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 47 82' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.108 81.52A76.918 76.918 0 0 1 41.64.69l5.32 10.278a65.344 65.344 0 0 0-34.435 68.666L1.108 81.52Z'
      fill='#FC7871'
    />
  </svg>
);

const Memo = memo(Ellipse242Icon);
export { Memo as Ellipse242Icon };
