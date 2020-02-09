


var Ajax = {

  call(method, url, callback, data) {
    var req = new XMLHttpRequest();

    req.onload = function(userCallback, err) {

      switch(this.status / 100) {
        case 2: // any 2xx response.
          userCallback.call(undefined, this.response);
          break;
        //case 3: // any 3xx response.
        //  throw new Error('request was redirected');
        //  break;
        case 4: // any 4xx response.
          throw new Error('a client request error has occurred');
          break;
        case 5: // any 5xx response.
          throw new Error('a server error has occurred');
          break;
      };

    }.bind(req, callback);

    req.open(method, url, true);  // asynchronous request.

    //req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // lol...SpringMVC.
    //req.setRequestHeader('Content-Type', 'multipart/form-data');
    req.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
    //req.setRequestHeader('Accept', 'application/json'); // lol...SpringMVC.
    req.responseType = 'json';

    req.send(JSON.stringify(data));
    //req.send(data);
  },

};
