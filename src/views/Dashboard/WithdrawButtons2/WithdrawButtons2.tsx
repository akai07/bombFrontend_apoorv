import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import useBank from '../../../hooks/useBank';
import useRedeem from '../../../hooks/useRedeem';
import classes from './WithdrawButtons2.module.css';

interface Props {
  className?: string;
  classes?: {
    claimRewards?: string;
  };
}
export const WithdrawButtons2: FC<Props> = memo(function WithdrawButtons2(props = {}) {
  const bank = useBank("BombBtcbLPBShareRewardPool");
  const { onRedeem } = useRedeem(bank);
  return (
    <button onClick={onRedeem} className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.claimRewards} ${props.classes?.claimRewards || ''}`}>Withdraw</div>
    </button>
  );
});
//BombBtcbLPBShareRewardPool