import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

import style from './style';
import { keepSafeEvents } from '../../const';
import { emitEvent } from '../../utils/events'

import CloseImage from '../../themes/assets/icClose24.png';

class CloseButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={style.closeContainer} onPress={ () => { emitEvent(this, keepSafeEvents.DismissScreen); }}>
        <Image style={style.closeImage} source={CloseImage} />
      </TouchableOpacity>
    );
  }
}

export default CloseButton
