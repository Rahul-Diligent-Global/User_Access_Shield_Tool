using { Currency, managed } from '@sap/cds/common';
namespace diligent.uas;

@cds.persistence.exists
entity home : managed {
  key ID : Integer;
  @mandatory title  : localized String(111);
  descr  : localized String(1111);
  stock  : Integer;
  price  : Decimal;
  currency : Currency;
}


