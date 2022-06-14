import { memo, SVGProps } from 'react';
import React, {useCallback, useMemo} from 'react';

const Ellipse245Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 36 75' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.335.99a76.917 76.917 0 0 1 26.222 73.408l-11.31-2.156A65.403 65.403 0 0 0 .95 9.822L8.335.99Z'
      fill='#C3C5CB'
    />
  </svg>
);

const Memo = memo(Ellipse245Icon);
export { Memo as Ellipse245Icon };
