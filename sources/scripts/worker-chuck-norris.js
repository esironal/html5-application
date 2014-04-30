
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
'use strict';

//importScripts('/libraries/jquery/jquery-2.1.0.min.js' );

var
    fn = {},
    data = null,
    
    index = 0,
    newIndex = 0,
    
    words = [ 'Hund', 'Katze', 'Maus'],
end;

fn = {
    pickAWord : function() {
        /*
        index = Math.floor(Math.random() * words.length);
        data = words[index];
        fn.send(data);
        */
        var done = function(result) {
            fn.send(result);
        };
        
        callAjax("http://api.icndb.com/jokes/random", done);
    },
    
    send : function(data) {
        self.postMessage('{"dom" : ' + '"' + JSON.parse(data).value.joke + '"}');
    },
    
    log : function(message) {
        self.postMessage('{"console" : ' + '"' + message + '"}');
    },
};

self.addEventListener('message', function() {fn.log('nachricht ');}, false);

setInterval(fn.pickAWord, Math.random()*500);


// for ajax call
function callAjax(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}