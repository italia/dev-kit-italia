export interface TransferItemData {
  value: string;
  label: string;
  disabled?: boolean;
}

export type TransferAction = 'transfer' | 'backtransfer' | 'reset';

export interface TransferEventDetail {
  /** The action that triggered the event. */
  action: TransferAction;
  /** The values of the items involved in the action (empty for reset). */
  items: string[];
  /** The values of items that will be in the source list after the action. */
  source: string[];
  /** The values of items that will be in the target list after the action. */
  target: string[];
}
