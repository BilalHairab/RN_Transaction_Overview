export type TransactionStatus =
  | 'APPROVED'
  | 'DECLINED'
  | 'PENDING'
  | 'CANCELLED'
  | 'IN_REVIEW';

export type TransactionDetails = {
  origin:
    | 'MOBILE_APP'
    | 'WEB_PORTAL'
    | 'IN_PERSON'
    | 'ATM_MACHINE'
    | 'PHONE_CALL';
};

export interface TransactionRecord {
  objectType: 'TRANSACTION';
  status: TransactionStatus;
  objectId: string;
  timestamp: string;
  details: TransactionDetails;
}
