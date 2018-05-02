import React, { Component } from 'react';

import PremiumUpsellScreenTwo from './containers/PremiumUpsellScreenTwo/index'; // Version can be specified in package.json
import PremiumUpsellScreenOne from './containers/PremiumUpsellScreenOne/index';

const props = {
  config: {
      'prices' : [
      {
        'price': '$23.99',
        'localizedPrice': '$23.99',
        'monthlyPriceLocal' : '$1.99',
        'sku' : 'com.getkeepsafe.photos.premium.g0.sub.12month_t24',
        'totalPriceDouble' : 23.99,
        'month' : 12
      }
    ]  
  }
};


export default class App extends Component {
  render() {
    return (
      <PremiumUpsellScreenOne {...props} />
      );
  }
}
