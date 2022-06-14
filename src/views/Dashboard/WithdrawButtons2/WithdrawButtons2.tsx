import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import classes from './WithdrawButtons2.module.css';

interface Props {
  className?: string;
  classes?: {
    withdraw?: string;
    iconArrowDownCircle?: string;
  };
}
export const WithdrawButtons2: FC<Props> = memo(function WithdrawButtons2(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.withdraw} ${props.classes?.withdraw || ''}`}>Withdraw</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
