import { ActionType } from '../action-type';

interface DepositAction {
  type: ActionType.DEPOSİT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;