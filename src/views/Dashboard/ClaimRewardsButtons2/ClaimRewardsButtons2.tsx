import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import classes from './ClaimRewardsButtons2.module.css';

interface Props {
  className?: string;
  classes?: {
    claimRewards?: string;
  };
}
export const ClaimRewardsButtons2: FC<Props> = memo(function ClaimRewardsButtons2(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.claimRewards} ${props.classes?.claimRewards || ''}`}>Claim All</div>
    </button>
  );
});
