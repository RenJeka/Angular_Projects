import {IArtObject} from "./iart-object";
import {IFacet} from "./ifacet";
import {INamedFacet} from "./inamed-facet";

export interface IArtCollection {
  artObjects: IArtObject[];
  count: number;
  countFacets: {
    hasimage: 2871,
    ondisplay: 13
  }
  elapsedMilliseconds: number;
  facets:INamedFacet[];
}
