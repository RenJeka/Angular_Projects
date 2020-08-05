export interface IArtObjectDetails {
 artObject: {
   classification: {
     events: any[];
     iconClassDescription: string[];
   }
   dating: {
     period: number;
     presentingDate: string;
     sortingDate: number;
     yearEarly: number;
     yearLate: number;
   };
   description: string;
   dimensions: {
     part: any;
     type: string;
     unit: string;
     value: string;
   }[];
   documentation: string[];
   label: {
     date: string;
     description: string;
     makerLine: string;
     notes: string;
     title: string;
   }
   links: {
     search: string;
   }
   longTitle: string;
   materials: string[];
   objectTypes: string[];
   objectNumber: string;
   plaqueDescriptionEnglish: string;
   principalMaker: string;
   scLabelLine: string;
   subTitle: string;

   [propName: string]: any;
 };
 artObjectPage: {
   [propName: string]: any;
 };
  [propName: string]: any;
}
