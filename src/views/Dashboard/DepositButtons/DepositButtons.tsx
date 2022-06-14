import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import classes from './DepositButtons.module.css';
import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';

interface Props {
  className?: string;
  classes?: {
    deposit?: string;
    iconArrowDownCircle?: string;
  };
}
export const DepositButtons: FC<Props> = memo(function DepositButtons(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.deposit} ${props.classes?.deposit || ''}`}>Deposit</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
