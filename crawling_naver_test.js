
var casper = require('casper').create({verbose: true, logLevel: "debug"});

var url = 'https://www.naver.com/';

casper.start(url);

function getData() {
    //capser.wait(3000);
	
	var arr = document.querySelectorAll('.ah_k');
	
    return Array.prototype.map.call(arr, function(elem) {
        return elem.innerText;
    });
}

function loggingData() {
	console.log("Test");
	
	this.waitForSelector(".ah_k", function() {
		var data = this.evaluate(getData);

		console.log(data);
		console.dir(data[0].innerText);

		console.log(data.length);

		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	});
}

casper.then(loggingData);

casper.run();