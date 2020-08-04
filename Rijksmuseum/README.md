# Application for Rijksmuseum 

#####This is a test project, the essence of which is to give the user the opportunity to comfortably view basic information about the objects of art (paintings) of the Rijksmuseum.

The data was taken from the official database of the museum by API, the link to the description of which is below.

The project used 2 API's - one for obtaining a collection of art objects, the second for obtaining detailed
 information on a specific art object.
 
 The project was built on the Angular 9 framework **without using** third-party libraries, frameworks, etc. (to optimize web
  application loading)

####The project consists of:
#####4 components:
* main.component
* popup.component
* details.component
* error-page.component
######Each component represents a separate page for rendering information 
#####2 services:
* data.service
* pagination.service
#####2 directives:
* ng-for-with-numbers.directive
* image-scale.directive
#####6 external interfaces:
* iart-collection
* iart-object
* iart-object-details
* iart-object-image
* inamed-facet
* ifacet
######The assets folder contain only a few pictures (icons)
######Also, all the style variables were moved to a separate file (`src / stylings`). This file was connected to the project through the configuration file (<u>*`angular.json: `*</u>`projects / Rijksmuseum / architect / build / options / stylePreprocessorOptions / includePaths`)
***


 > API of database  — https://data.rijksmuseum.nl/object-metadata/api/

> MyAccount in Rijksmuseum — https://www.rijksmuseum.nl/en/rijksstudio/2826853--renjeka/collections
