import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { getPricesfromConfig } from '../../utils/config';

import GetPremiumButton from './button';
import CloseButton from './closeButton';
import style from './style';

export default class PremiumUpsellScreenTwo extends Component {
  render() {
    const { config } = this.props;
    const prices = getPricesfromConfig(config);
    const content = {
      'image': require('./aspirationalPaywall1Img.jpg'),
      'headline': 'Your secrets are safe with us',
      'text' : `Keepsafe Premium for ${prices[0].monthlyPriceLocal}/mo`,
    };
    return (
      <View style={style.container}>
        <Image source={content.image} style={style.image} />
        <CloseButton />
        <View style={style.contentArea}>
          <Text style={style.headline}>{content.headline}</Text>
          <Text style={style.text}>{content.text}</Text>
          <GetPremiumButton sku={prices[0].monthlyPriceLocal} />
        </View>
      </View>
    );
  }
}

PremiumUpsellScreenTwo.propTypes = {
  config: PropTypes.object.isRequired,
};