'use strict';

/**
 * Get prices from the screen config
 * @param  {[type]}  config of screen configs to search
 * @return {Array}   Array of prices, empty if none were found
 */
function getPricesfromConfig(config) {
  if (!(config instanceof Object) || !('prices' in config)) {
    return [];
  }
  return config['prices'];

}

module.exports = {
  getPricesfromConfig
}
