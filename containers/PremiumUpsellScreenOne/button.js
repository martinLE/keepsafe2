'use strict';

import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';


import PropTypes from 'prop-types';

import style from './style';

import { keepSafeEvents } from '../../const';
import { emitEvent } from '../../utils/events'

class GetPremiumButton extends React.Component {
  render() {
    const { sku } = this.props;
    const info = { sku: sku };      
    return (
        <TouchableOpacity
          style={style.premiumButton}
          onPress={ ()=> { emitEvent(this, keepSafeEvents.BuyPremiumSubscription, {info:info}); }}>
          <Text style={style.premiumButtonText}>{'Get Premium'.toUpperCase()}</Text>
        </TouchableOpacity>
    );
  }
}

GetPremiumButton.propTypes = {
  sku: PropTypes.string.isRequired,
};

export default GetPremiumButton
