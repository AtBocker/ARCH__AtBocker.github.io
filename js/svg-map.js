// By Kiselev Nikolay

nw = parseFloat(getComputedStyle(mapfat).width, 10)
nw = nw * (3 / 4);
w = nw.toString().concat("px");
nh = nw / 0.5278;
nh = nh * (3 / 4);
h = nh.toString().concat("px");

map = document.getElementById("map");
mapfat = document.getElementById("mapfat");

map.style.width = w;
map.style.height = h;