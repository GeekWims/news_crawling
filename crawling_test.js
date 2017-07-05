
var casper = require('casper').create({verbose: true, logLevel: "debug"});

var url = 'https://www.kinds.or.kr/news/subMain.do?startNo=4';

casper.start(url);

function getData() {
    //capser.wait(3000);
	
	var arr = document.querySelectorAll('h3.list_newsId');
	
    return Array.prototype.map.call(arr, function(elem) {
        return elem.innerText;
    });
}

function loggingData() {	
    var data = this.evaluate(getData);

	console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

casper.then(loggingData);

casper.run();