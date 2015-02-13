function shuffle() {
	var listEntries = document.getElementById('names')
	var names = [];

	while (listEntries.firstChild) {
		var text = listEntries.firstChild.lastChild.data;
		names.push(text);
		listEntries.removeChild(listEntries.firstChild);
	}

	var santas = [];
	for (var pos=0; pos < names.length; pos++) {
		santas.push(names[pos]);
	}

	var assignment = {};
	var i=0;
	while (santas[i]) {
		person = santas[i];
		index = Math.floor((Math.random() * names.length));
		if (person != names[index]) {
			assignment[String(person)] = names[index];
			names.splice(index, 1)
			i++;
		}
	}
	console.log(assignment);
	makeFiles(assignment);
}	

function makeFiles(assignment) {
	var body = document.getElementById('main');
	var div = document.createElement('div');
	//code to implement file creation
	var textfile = null; 
  	makeTextFile = function (text) {
  		console.log(text);
    	var data = new Blob([text], {type: 'text/plain'});
    	textFile = window.URL.createObjectURL(data);

    	return textFile;
  	};
  	var arr = Object.keys(assignment);
  	console.log(arr);
  	for (var i=0; i<arr.length; i++) {
  		var a = arr[i];
  		console.log(a);
	    var link = document.createElement('a');
	    var node = document.createTextNode(a);
	    link.download = a + ".txt";
		link.href = makeTextFile(assignment[a]);
		link.style.display = 'block';
		link.appendChild(node);
		div.appendChild(link);
	};

	body.appendChild(div);
}