import {IFacet} from "./ifacet";

export interface INamedFacet {
  facets: IFacet[];
  name: string;
  otherTerms: number;
  prettyName: number;
}
