import {IArtObject} from "src/app/shared/iart-object";
import {INamedFacet} from "src/app/shared/inamed-facet";

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
