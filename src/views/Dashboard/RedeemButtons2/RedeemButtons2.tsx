import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';


import useBombFinance from '../../../hooks/useBombFinance';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import { BOND_REDEEM_PRICE_BN } from '../../../bomb-finance/constants';
import {useTransactionAdder} from '../../../state/transactions/hooks';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useBondStats from '../../../hooks/useBondStats';
import classes from './RedeemButtons.module.css';
import { IconArrowDownCircleIcon } from './IconArrowDownCircleIcon';
import useCatchError from '../../../hooks/useCatchError';
import useApprove from '../../../hooks/useApprove';

// import React from 'react';


// import Button from '../../../components/Button';
// import Card from '../../../components/Card';
// import useBombFinance from '../../../hooks/useBombFinance';
// import classes from '../../PurchaseButtons.module.css';


// import classes from './RedeemButtons.module.css';

// interface Props {
//   className?: string;
//   classes?: {
//     redeem?: string;
//     iconArrowDownCircle?: string;
//   };
// }
// export const RedeemButtons2: FC<Props> = memo(function RedeemButtons(props = {}) {
//   return (
//     <button className={`${classes.root} ${props.className || ''}`}>
//       <div className={`${classes.redeem} ${props.classes?.redeem || ''}`}>Redeem2</div>
//       console.log('Hi');
//       <IconArrowDownCircleIcon
//         className={`${classes.iconArrowDownCircle} ${props.classes?.iconArrowDownCircle || ''}`}
//       />
//     </button>
//   );
// });

interface Props {
  className?: string;
  classes?: {
    purchase?: string;
    group2945?: string;
    vector?: string;
    iconShoppingCart?: string;
  };
}
export const RedeemButtons2: FC<Props> = memo(function PurchaseButtons(props = {}) {
  const cashPrice = useCashPriceInLastTWAP();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  const bondsPurchasable = useBondsPurchasable();
  const catchError = useCatchError();
  const {
    contracts: {Treasury},
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(bombFinance.BOMB, Treasury.address);
  const shoot = () => {
    alert("Great Shot!");
  }
  const handleRedeemBonds = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, {summary: `Redeem ${amount} BBOND`});
    },
    [bombFinance, addTransaction],
  );
  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await bombFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
      });
    },
    [bombFinance, addTransaction],
  );
  return (
    //  
  <button className={`${classes.root} ${props.className || ''}`} onClick={() => catchError(approve(), `Unable to approve `)} >
    
      <div className={`${classes.purchase} ${props.classes?.purchase || ''}`}>Purchase</div>
      
      <IconArrowDownCircleIcon
        className={`${classes.iconArrowDownCircle} ${props.classes?.purchase || ''}`}
      />
    </button>
  );
});



// function approve(): any {
//   throw new Error('Function not implemented.');
// }

