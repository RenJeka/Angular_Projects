import {IFacet} from "src/app/shared/ifacet";

export interface INamedFacet {
  facets: IFacet[];
  name: string;
  otherTerms: number;
  prettyName: number;
}
