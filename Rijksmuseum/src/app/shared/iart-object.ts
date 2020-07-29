import {IArtObjectImage} from "./iart-object-image";

export interface IArtObject {
  hasImage: boolean;
  headerImage: IArtObjectImage
  id: string;
  links: {
    self: string;
    web: string;
  }
  longTitle: string;
  objectNumber: string;
  permitDownload: boolean;
  principalOrFirstMaker: string;
  productionPlaces: string[];
  showImage: boolean;
  title: string;
  webImage: IArtObjectImage
}
