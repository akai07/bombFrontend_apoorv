import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import useBank from '../../../hooks/useBank';
import useRedeem from '../../../hooks/useRedeem';
import classes from './WithdrawButtons.module.css';

interface Props {
  className?: string;
  classes?: {
    claimRewards?: string;
  };
}
export const WithdrawButtons: FC<Props> = memo(function WithdrawButtons(props = {}) {
  const bank = useBank("BombBtcbLPBShareRewardPool");
  const { onRedeem } = useRedeem(bank);
  return (
    <button onClick={onRedeem} className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.claimRewards} ${props.classes?.claimRewards || ''}`}>Withdraw</div>
    </button>
  );
});
//BombBtcbLPBShareRewardPool



// function approve(): any {
//   throw new Error('Function not implemented.');
// }

