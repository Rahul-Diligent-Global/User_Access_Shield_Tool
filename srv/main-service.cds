using { diligent.uas as uas } from '../db/schema';

service MainService @(requires:'admin') {
  @cds.persistence.skip
  entity Books as projection on uas.home;
}
