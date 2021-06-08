var sehri = [
    "05:05am","05:04am","05:04am","05:03am","05:02am","05:02am","05:01am","05:00am","05:00am","04:59am","04:59am","04:58am","04:57am","04:57am",
"04:56am","04:56am","04:55am","04:55am","04:54am","04:54am","04:53am","04:53am","04:52am","04:52am","04:51am","04:51am","04:51am",
"04:50am","04:50am","04:49am",
]

var iftar = [
    "06:55pm","06:55pm","06:56pm","06:56pm","06:57pm","06:57pm","06:57pm","06:58pm","06:58pm","06:59pm","06:59pm","07:00pm","07:00pm","07:01pm"
,"07:01pm","07:02pm","07:02pm","07:03pm","07:03pm","07:04pm","07:04pm","07:05pm","07:05pm","07:06pm","07:06pm","07:07pm","07:07pm","07:08pm",
"07:08pm","07:09pm",
]

var roza = +prompt("Enter the Ramadan day to see Sehri and Iftar time");

document.getElementById("roza").innerHTML = roza;
document.getElementById("sehr").innerHTML = sehri[roza-1];
document.getElementById("ifftar").innerHTML = iftar[roza-1];







