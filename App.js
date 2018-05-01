import React, { Component } from 'react';

import PremiumUpsellScreenTwo from './containers/PremiumUpsellScreenTwo/index';

/**
 * Since both screens have an identical design, 
 * texts can be changed using props,
 * otherwise it would mostly be duplicated content. 
*/


const props = {
  config: {
    'content' : {
      'image': require('./assets/aspirationalPaywall1Img@2x.jpg'),
      'headline': 'Your secrets are safe with us',
      'text' : 'Keepsafe Premium for $1.99/mo',
    }
  }
};

/*
const props = {
  config: {
    'content' : {
      'image': require('./assets/aspirationalPaywall2Img@2x.jpg'),
      'headline': 'Privacy gives me the freedom to be me',
      'text' : 'Keepsafe Premium for $1.99/mo',
    }
  }
};
*/

export default class App extends Component {
  render() {
    return ( 
      <PremiumUpsellScreenTwo {...props}/>
      );
  }
}
