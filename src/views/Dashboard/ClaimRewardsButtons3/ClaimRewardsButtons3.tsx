import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import classes from './ClaimRewardsButtons3.module.css';

interface Props {
  className?: string;
  classes?: {
    claimRewards?: string;
  };
}
export const ClaimRewardsButtons3: FC<Props> = memo(function ClaimRewardsButtons3(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.claimRewards} ${props.classes?.claimRewards || ''}`}>Claim Rewards</div>
    </button>
  );
});
