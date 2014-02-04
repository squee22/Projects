var troll = 0;
document.getElementById('trollNumber').innerHTML = troll;
function getContent() {
	var header = document.getElementById('formHeader').value;
	var paragraph = document.getElementById('formPara').value;
	
	function postContent(header, paragraph){
		if (troll != 3) {
			document.getElementById('changeHeader').innerHTML = header;
			document.getElementById('changePara').innerHTML = paragraph;
			troll++;
			document.getElementById('trollNumber').innerHTML = troll;
		}
		else {
			alert('Geez, noob! Stop being a damn pain!')
			troll = 0;
			document.getElementById('changeHeader').innerHTML = header;
			document.getElementById('changePara').innerHTML = paragraph;
		}
	}
	
	postContent(header, paragraph);
}
