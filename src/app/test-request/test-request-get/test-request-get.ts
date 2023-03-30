export class Customer {
  public Code: string;
  public Category: string;
  public Group: ItemInfo;
  public FullName: string;
  public TaxId: string;
  public TradingPartner: ItemInfo;
  public SalesArea: ItemInfo;
  public SalesOffice: ItemInfo;
  public Branch: ItemInfo;
  public Plant: ItemInfo;
  public Addresses: AddressInfo[];

  public constructor(data: Customer) {
      this.Code = data.Code || '';
      this.Category = data.Category || '';
      this.Group = data.Group ? new ItemInfo(data.Group) : new ItemInfo();
      this.FullName = data.FullName || '';
      this.TaxId = data.TaxId || '';
      this.TradingPartner = data.TradingPartner ? new ItemInfo(data.TradingPartner) : new ItemInfo();
      this.SalesArea = data.SalesArea ? new ItemInfo(data.SalesArea) : new ItemInfo();
      this.SalesOffice = data.SalesOffice ? new ItemInfo(data.SalesOffice) : new ItemInfo();
      this.Branch = data.Branch ? new ItemInfo(data.Branch) : new ItemInfo();
      this.Plant = data.Plant ? new ItemInfo(data.Plant) : new ItemInfo();
      this.Addresses = data.Addresses ? data.Addresses.map((addr) => new AddressInfo(addr)) : [];
  }
}
export class ItemInfo implements InputTextObject {
  public Code: string;
  public Name: string;

  public constructor(data?: IItemInfo) {
      this.Code = data?.Code || '';
      this.Name = data?.Name || '';
  }

  ToString(): string {
      const value = [this.Code, this.Name];
      return value.filter(val => val).join('-');
  }
}

export class AddressInfo implements InputTextObject {
  public CustRefAddress: string;
  public Type: string;
  public Display: string;

  public constructor(data?: IAddressInfo) {
      this.CustRefAddress = data?.CustRefAddress || '';
      this.Type = data?.Type || '';
      this.Display = data?.Display || '';
  }

  ToString(): string {
      return this.Display;
  }
}
export interface InputTextObject {
  /**
   * @description
   * Return a display value for show in DOM
   */
  ToString(): string;
}

interface IItemInfo {
  Code: string;
  Name: string;
}

export interface IAddressInfo {
  CustRefAddress: string;
  Type: string;
  Display: string;
}

export class ResponseCustomerByBranch {
  public Message: string;
  public Data: Customer[];
  public HttpCode: number;

  public constructor(data: ResponseCustomerByBranch) {
      this.Message = data.Message || '';
      this.Data = data.Data || null;
      this.HttpCode = data.HttpCode || 0;
  }
}
