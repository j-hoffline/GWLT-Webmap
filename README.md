# Hike Worcester Interactive Trail Map
Developed for the Hike Worcester Challenge

### Author Information
Andrew Hostetler

Email: hostetlerae@gmail.com

## Purpose
This web map has been developed in order to allow for a greater degree of virtual interaction with the trails stewarded by The Greater Worcester Land Trust and included in the Hike Worcester Challenge. The concept was developed in collaboration with The Greater Worcester Land Trust in support of the ongoing work they do to maintain and expand publicly accessible hiking trails and protected lands within the Greater Worcester Region. 

The Hike Worcester website does host a usable web map using a simple but effective google maps tool. This web map allows users to see the bounds of existing conservation land included in the program as well as points located either at the center of the conservation land or  selected location along its boundary. This map is nicely styled with a simple legend for the points (pins) and the boundaries (thick green line with lighter green fill). 

### [The Existing Hike Worcester Web Map](http://www.hikeworcester.com/SystemMap/SystemMap.html)
![Existing Hike Worcester Web Map](/Images/Hike_Worcester_Map_Current.PNG)

Users viewing the existing Hike Worcester Map can click on the points and polygons displayed on the map to bring up a sidebar with the name of the feature and a link to more information about the conservation area. The provided links take users away from the map to a separate webpage or hosted pdf document where they’ll find more details about the property and the trails contained within.

Though this existing tool is useful for an initial exploration of available resources, It does not allow viewers to explore trails within the interactive web map. All “trail” maps available from the Greater Worcester Land Trust and Hike Worcester are static, printable maps, that are traditionally valuable, but are limited in the space they have to display information and become unwieldy when trying to take a broader view of the trails through the Greater Worcester Region. 

## The Tools
An initial draft of this concept was developed using the Web Map application from ArcGIS Online. This was only done as an initial, conceptual step due to the high expense of the platform and its associated ESRI suite of tools. Although the Greater Worcester Land Trust does have an ESRI account, this is not a future certainty. 

### [Hike Worcester - ArcGIS Online Web Map](https://clarku.maps.arcgis.com/apps/webappviewer/index.html?id=860fdb447ec34e9a8a18fb74bf2e6c53)
![ArcGIS Online Hike Worcester Web Map](/Images/AGOL_Hike_Worcester_WebMap.PNG)

An opensource version of this web map was developed using front-end web development tools and FOSS (Free and Open Source Software) libraries including Leaflet.JS and JQuery.JS. This approach allows for a more cost effective solution than using ArcGIS Online. It does however, require a greater degree of subject knowledge to develop this tool. For that reason this tool’s styling and functionality currently falls short of that demonstrated in the ArcGIS Online Web Map.

### [Hike Worcester - Leaflet.JS Web Map](https://theahostetler.github.io/GWLT-Webmap/index-leaflet.html)
![Hike Worcester Web Map](/Images/Leaflet_Hike_Worcester_WebMap.PNG)

## The Data
In order to develop an initial version of this web map it was decided that only a subset of trails would be included as a proof of concept. The Tetasset Hills trail network, located in the Eastern half of Worcester made for a good case study. This network of trails has a number of trail heads, multiple linked trails, and 2 different “Challenge” routes. The author of the project is also very familiar with these trails and enjoys reminiscing about past adventures while working.

At the beginning of this project The Greater Worcester Land Trust shared a database of trail lines that had been collected by a volunteer in the recent past. Though a valuable source of information, these line data had not been through a quality control process and so contained a number of errors and incomplete data. This database was referenced against a number of other sources including AllTrails and Open Street Map (OSM) to identify these errors. 

Upon recognizing the amount of work that would be involved with editing these data, it was decided that existing trail data would be downloaded from OSM for the purpose of developing an initial version of the web map. OSM’s data are contributed by the public and tend to be highly reliable due to the nature of their review process. The trail information that was downloaded included complete topologies and names of trails, sufficient for our purposes. This download was accomplished by using the built in, easy-to-use query and download tool in OSM.

After downloading these data from OSM, the lines and related details were edited in ArcGIS Pro before exporting them as geoJSON files for use in the web map. ArcGIS Pro was used to remove additional features such as foot bridges from the topology and link each individual section of the trails. The editing and geocoding tools were used in conjunction to create points at trailheads, assign them addresses, and create the “Challenge” routes offered by the Hike Worcester Challenge.

[This icon from The Noun Project was used for trailheads.](https://static.thenounproject.com/png/3342420-200.png)

## Work in Progress
* Add legend (unforgivable)
* Add home button 
* Add more trails
* Add more trail details
* Find a better basemap
* Allow map to remember view when switching between windows
* Allow side panel to be hidden
* Link trail names to views on the map

## Further Reading
If you’re interested in maps like this, checkout these cool web maps for inspiration:
* [NPS AT Map](https://nps.maps.arcgis.com/apps/webappviewer/index.html?id=6298c848ba2a490588b7f6d25453e4e0)
* [Boulder Trail Map](https://maps.bouldercolorado.gov/osmp-trails/)
* [New England Trail Map](https://newenglandtrail.org/interactive-map/)


