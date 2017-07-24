brkns = document.getElementsByClassName("broken");

for (i = 0; i < brkns.length; i++) {
	brkns[i].addEventListener("click", function(event) {
		alert("Вы не выбрали округ!\nУкажите округ на главной странице");
	});
};