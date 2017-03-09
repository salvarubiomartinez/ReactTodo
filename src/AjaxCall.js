var AjaxCall = (url, method, callback, data) => {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
           if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
               var json = xmlhttp.responseText;
               callback(JSON.parse(json));
           }
           else if (xmlhttp.status === 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open(method, url, true);
    if (method === 'POST' || method === 'PUT') {
        xmlhttp.setRequestHeader('Content-type', 'application/json');
    }
    //console.log(JSON.stringify(data));
    xmlhttp.send(JSON.stringify(data));
};

export default AjaxCall;