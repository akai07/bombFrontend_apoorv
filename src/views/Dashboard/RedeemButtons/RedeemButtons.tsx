import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import classes from './RedeemButtons.module.css';
import useCatchError from '../../../hooks/useCatchError';
import useBombFinance from '../../../hooks/useBombFinance';
import useApprove from '../../../hooks/useApprove';
import bombFinance from '../../../bomb-finance';

interface Props {
  className?: string;
  classes?: {
    redeem?: string;
    iconArrowDownCircle?: string;
  };
}
export const RedeemButtons: FC<Props> = memo(function RedeemButtons(props = {}) {
  
  const catchError = useCatchError();
  const {
    contracts: {Treasury},
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(fromToken, Treasury.address);

  return (
    <button className={`${classes.root} ${props.className || ''}`} onClick={() => catchError(approve(), `Unable to approve `)}>
      <div className={`${classes.redeem} ${props.classes?.redeem || ''}`}>Redeem</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});
