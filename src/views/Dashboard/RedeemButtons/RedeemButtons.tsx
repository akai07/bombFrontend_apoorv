import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import classes from './RedeemButtons.module.css';

interface Props {
  className?: string;
  classes?: {
    redeem?: string;
    iconArrowDownCircle?: string;
  };
}
export const RedeemButtons: FC<Props> = memo(function RedeemButtons(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.redeem} ${props.classes?.redeem || ''}`}>Redeem</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
