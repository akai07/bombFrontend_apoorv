import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import useBank from '../../../hooks/useBank';
import useRedeem from '../../../hooks/useRedeem';
import classes from './ClaimRewardsButtons.module.css';

interface Props {
  className?: string;
  classes?: {
    claimRewards?: string;
  };
}
export const ClaimRewardsButtons: FC<Props> = memo(function ClaimRewardsButtons(props = {}) {
  const bank = useBank("BombBtcbLPBShareRewardPool");
  const { onRedeem } = useRedeem(bank);
  return (
    <button onClick={onRedeem} className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.claimRewards} ${props.classes?.claimRewards || ''}`}>Claim Rewards</div>
    </button>
  );
});
//BombBtcbLPBShareRewardPool