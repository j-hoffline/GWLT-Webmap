/*
{
    "trailName": "Asnebumskit",
    "quickFacts": "Acreage: 104\nType: Fee, Easements\nLocations: 107 Asnebumskit Road, Paxton (with Easements in Holden & Paxton)\nEstablished: 6/13/2016\nFeatures: Woodland, stream, scenic vista, Rte. 122 frontage\nParking: Access over easement off of the end of Asnebumskit Road; Access up easement strip between houses north of Nursery on Pleasant Street; Foot Access at grade cut on Pleasant Street Frontage",
    "wildlife": [],
    "foliage": ["Pickerel Fog","Mountain Laurel"],
    "landmarks": [
        {"name":"Thoreau's Seat",
            "image":"https://i1.wp.com/www.gwlt.org/wp-content/uploads/2020/07/thoreaus-seat.jpeg?w=640&ssl=1",
            "description":"Near the summit of Asnebumskit Ridge is a scenic overlook, Thoreau’s Seat, that offers a wonderful view of the valley to the West including Mount Wachusett and Kettle Brook Reservoir #4. Along the trail are streams to cross and a formerly logged area with fields of wildflowers."}
            ]
}*/
let trailDetails = JSON.parse(localStorage.getItem("trail"));
document.getElementById("trailName").innerText = trailDetails.trailName;
document.getElementById("quickFacts").innerText = trailDetails.quickFacts;

