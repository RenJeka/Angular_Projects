export interface IArtObject {
  hasImage: boolean;
  headerImage: {
    guid: string;
    height: number;
    offsetPercentageX: number;
    offsetPercentageY: number;
    url: string;
    width: number;
  }
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
  webImage: {
    guid: string;
    height: number;
    offsetPercentageX: number;
    offsetPercentageY: number;
    url: string;
    width: number;
  }
}
