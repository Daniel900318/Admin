(function() {
  'use strict';

  angular
    .module('uglymonaAdmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
