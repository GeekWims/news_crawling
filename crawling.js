
var casper = require('casper').create({verbose: true, logLevel: "debug"});

var url = 'https://www.kinds.or.kr/news/subMain.do'

casper.start();

casper.open(url);

function getData() {
    //capser.wait(3000);
    return document.querySelectorAll('h3.list_newsId');
}

function loggingData() {
    var data = this.evaluate(getData);

    console.dir(data[0]);

    console.log(data.length);

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

casper.then(function() {
    casper.wait(3000);
    casper.capture("screenshot.png");
});

casper.then(loggingData);

casper.run();