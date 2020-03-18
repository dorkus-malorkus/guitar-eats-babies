

class Cookie {

  static set(key, value, lifetime) {
    let expTime = lifetime * 1000;
    let expiration = (new Date(Date.now() + expTime)).toGMTString();
    let data = [key, '=', value, ';expires=', expiration ];

    document.cookie = data.join('');
  }

  static get(key) {
    let regexStr = ['(?:(?:^|.*;\\s*)', key, '\\s*\\=\\s*([^;]*).*$)|^.*$'].join('');
    let regex = new RegExp(regexStr);

    return document.cookie.replace(regex, '$1');
  }

  static clearAll() {
    let cookies = document.cookie.split(";");

    for (let idx = 0; idx < cookies.length; idx++) {
      let cookie = cookies[idx];
      let pos = cookie.indexOf("=");
      let name;

      if (pos > -1) {
        name = cookie.substr(0, pos);
      } else {
        name = cookie;
      }

      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

  }

}
