import { FC, memo } from 'react';
import React, {useCallback, useMemo} from 'react';
import { IconShoppingCartIcon } from './IconShoppingCartIcon';
import classes from './PurchaseButtons.module.css';
import { VectorIcon } from './VectorIcon';

import {getDisplayBalance} from '../../../utils/formatBalance';
import useBombFinance from '../../../hooks/useBombFinance';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import ExchangeCardForDashboard from '../../Bond/components/ExchangeCard';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../../bomb-finance/constants';
import {useTransactionAdder} from '../../../state/transactions/hooks';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useBondStats from '../../../hooks/useBondStats';
interface Props {
  className?: string;
  classes?: {
    purchase?: string;
    group2945?: string;
    vector?: string;
    iconShoppingCart?: string;
  };
}
export const PurchaseButtons: FC<Props> = memo(function PurchaseButtons(props = {}) {
  const cashPrice = useCashPriceInLastTWAP();
  const bombFinance = useBombFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  const bondsPurchasable = useBondsPurchasable();

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
    <ExchangeCardForDashboard
    action="Purchase"
    fromToken={bombFinance.BOMB}
    fromTokenName="BOMB"
    toToken={bombFinance.BBOND}
    toTokenName="BBOND"
    priceDesc={
      !isBondPurchasable
        ? 'BOMB is over peg'
        : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'
    }
    
    onExchange={handleBuyBonds}
    disabled={!bondStat || isBondRedeemable}
  />
  );
});
