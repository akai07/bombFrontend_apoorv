import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import classes from './DepositButtons3.module.css';
import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';

interface Props {
  className?: string;
  classes?: {
    deposit?: string;
    iconArrowDownCircle?: string;
  };
}
export const DepositButtons3: FC<Props> = memo(function DepositButtons3(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.deposit} ${props.classes?.deposit || ''}`}>Deposit</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
