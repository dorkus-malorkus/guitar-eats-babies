


var Util = {

  pathname: function(/* arguments */) {
    return [...arguments].join('/');
  },

  inArray: function(needle, haystackAry, shouldMatchTypes) {
    // mimics HTML 5's Array contains() method
    // but named after the jQuery equivalent.

    var matches = haystackAry.filter(function(haystackEntry) {
      if (shouldMatchTypes) {
        // verify that constructors match as well.
        return haystackEntry === needle;
      } else {
        // default: match only values, ignoring object types.
        return haystackEntry == needle;
      }

    });

    return (matches.length != 0);

  },

  strIsPopulated: function(input) {
    // NOTE: doesn't differentiate between undefined and null or validate type.
    return !!(input && input.length && input.trim().length > 0);
  },

  isDateStr: function(str) {
    // catches human-readable date strings as well as the following number patterns:
    // ##/##/##, ##/##/####, ####/##/##, ##-##-##, ##-##-####, and ####-##-##
    // also double-checks that it's not actually a time string, for good measure.
    var str = str.trim();

    return !!str.match(/^\d{1,2}[\/-]{1}\d{1,2}[\/-]{1}(\d{4}|\d{2})$/) ||
      !!str.match(/^\d{4}[\/-]{1}\d{1,2}[\/-]{1}\d{1,2}$/) ||
      !!str.match(/^[\s]*[a-z]{3,}[\s]{1,}\d{1,2}[\s]*[,\s]{1,}[\d]{4}[\s]*$/gi);
  },

  isTimeStr: function(str) {
    // catches ##:##:## strings with an optional am or pm suffix.
    return !!(str.trim().match(/^\d{1,2}:\d{1,2}:\d{1,2}(am|pm){0,1}$/i));
  },

  prePadString: function(str, finalLength, padChar) {
    var padChar = padChar || ' '; // default to spaces..
    return (new Array(finalLength - (str.length - 1)).join(padChar)) + str;
  },

  postPadString: function(str, finalLength, padChar) {
    var padChar = padChar || ' '; // default to spaces..
    return str + (new Array(finalLength - (str.length - 1)).join(padChar));
  },

  filterUnpopulatedValues: function(obj) {
    output = {};
    for (var key in obj) {
      var entry = obj[key];

      switch(!!entry && entry.constructor) {
        case String:
          if (Util.strIsPopulated(entry))   output[key] = entry;
          break;

        // TODO: Maybe add an Array or Object case? ..or maybe not?

        default:
          if (!!entry)    output[key] = entry;
          break;

      }

    }

    return output;
  },


};
