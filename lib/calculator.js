'use strict';
(function () {
  function cofeeCalculator() {
    return 'W3Develop';
  }

  if (typeof module !== 'undefined') {
    module.exports = cofeeCalculator;
  } else {
    window.cofeeCalculator = cofeeCalculator;
  }

})();

