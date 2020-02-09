

const Page = {

  getQueryParameter: (key) => {
    return Page.getQueryParameters()[key];
  },


  getQueryParameters: () => {
    let rawParams = document.location.search.split(/[\&\?]/).slice(1) || [];
    let output = {};

    rawParams.forEach((rawEntry) => {
      let entryKey = rawEntry.match(/^[\w\-]+/).toString();
      let entryValue = rawEntry.match(/(?!.*\=).+$/).toString();

      output[entryKey] = decodeURI(entryValue);
    });

    return output;
  },

  setQueryParameters: (obj) => {
    // apply an object to our current url's query.
    let currentParams = document.location.search.split(/[\&\?]/).slice(1) || [];

    for (let key in obj) {
      currentParams = currentParams.filter((param) => {
        let matcher = new RegExp('^' + key + '(?=\=.*)');
        return !param.match(matcher);
      });

      currentParams.push(key + '=' + encodeURI(obj[key]));
    }

    document.location.search = '?' + currentParams.join('&');
  },

  setQueryParameter: (key, val) => {
    // set a single parameter to the url's query.
    let currentParams = document.location.search.split(/[\&\?]/).slice(1) || [];
    currentParams = currentParams.filter((param) => {
      let matcher = new RegExp('^' + key + '(?=\=.*)');
      return !param.match(matcher);
    });

    currentParams.push(key + '=' + encodeURI(val));

    document.location.search = '?' + currentParams.join('&');
  },

  removeQueryParameter: (key) => {
    // remove a single parameter from the url's query.
    let currentParams = document.location.search.split(/[\&\?]/).slice(1) || [];
    currentParams.filter((param) => {
      let matcher = new RegExp('^' + key + '(?=\=.*)');
      return !param.match(matcher);
    });

    document.location.search = '?' + currentParams.join('&');
  },

  clearQueryParameters: () => {
    // clear out the query altogether.
    document.location.search = '';
  },

  objectToQuery: (obj) => {
    let output = [];

    for (let key in obj) {
      output.push(key + '=' + encodeURI(obj[key]));
    }

    return output.join('&');
  },

};
