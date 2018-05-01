import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import GetPremiumButton from './button';
import CloseButton from './closeButton';
import style from './style';

export default class PremiumUpsellScreenTwo extends Component {
  render() {
    const { config } = this.props;
    const content = config.content;

    return (
      <ImageBackground source={content.image} style={style.container}>
        <CloseButton />
        <View style={style.contentArea}>
          <Text style={style.headline}>{content.headline}</Text>
          <Text style={style.content}>{content.text}</Text>
          <GetPremiumButton sku={'value'} />
        </View>
      </ImageBackground>
    );
  }
}

PremiumUpsellScreenTwo.propTypes = {
  config: PropTypes.object.isRequired,
};