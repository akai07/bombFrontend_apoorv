import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import classes from './WithdrawButtons3.module.css';

interface Props {
  className?: string;
  classes?: {
    withdraw?: string;
    iconArrowDownCircle?: string;
  };
}
export const WithdrawButtons3: FC<Props> = memo(function WithdrawButtons3(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.withdraw} ${props.classes?.withdraw || ''}`}>Withdraw</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
