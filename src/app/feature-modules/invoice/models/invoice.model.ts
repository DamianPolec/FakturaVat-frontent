export interface Invoice {
    invoiceNumber: string;
    invoiceDate: Date;
    issuerCompanyName: string;
    recipientName: string;
    saleDate: Date;
    itemName: string;
    netPrice: number;
    vatValue: number;
    grossPrice: number;
    totalAmount: number;
  }