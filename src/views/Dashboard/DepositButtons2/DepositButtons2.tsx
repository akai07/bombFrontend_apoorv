import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';

import classes from './DepositButtons2.module.css';
import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import useModal from '../../../hooks/useModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useStakeToBomb from '../../../hooks/useStakeToBomb';
import useBombFinance from '../../../hooks/useBombFinance';
import DepositModal from '../../Bank/components/DepositModal';
import {Bank} from '../../../bomb-finance';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import ERC20 from '../../../bomb-finance/ERC20';

interface Props {
  className?: string;
  classes?: {
    deposit?: string;
    iconArrowDownCircle?: string;
  };
}
export const DepositButtons2: FC<Props> = memo(function DepositButtons2(props = {}) {
  const bombFinance = useBombFinance();
  const { onStake } = useStakeToBomb();
  const tokenBalance = useTokenBalance(bombFinance.BSHARE);

  const [approveStatus, approve] = useApprove(bombFinance.BBOMB_BTCB, "0x1083926054069AaD75d7238E9B809b0eF9d94e5B");
  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={18}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onStake(amount);
        onDismissDeposit();
      }}
      tokenName={"BOMB-BTCB-LP"}
    />,
  );
  return (
    <button onClick={approve} className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.deposit} ${props.classes?.deposit || ''}`}>Deposit</div>
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
      />
    </button>
  );
});