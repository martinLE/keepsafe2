import { StyleSheet, Dimensions, Image } from 'react-native';

const width = Dimensions.get('window').width;
const contentAreaSidePadding = 40;

export default StyleSheet.create({
    container: {
      flex: '1',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      
    },
    image: {
      width: width,
      height: width * 1.213
    },
    contentArea: {
      width: width,
      alignItems: 'flex-start',
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: contentAreaSidePadding,
      paddingRightm: contentAreaSidePadding
    },
    headline: {
      width: width - (2 * contentAreaSidePadding),
      textAlign: 'center',
      fontSize: 24,
      lineHeight: 28,
      marginBottom: 24,
      color: 'rgb(55, 25, 137)',
    },
    text: {
      width: width - (2 * contentAreaSidePadding),
      textAlign: 'center',
      fontSize: 17,
      marginBottom: 24,
      color: 'rgb(55, 25, 137)',
    },
    premiumButtonText: {
      color: 'white'
    },
    premiumButton: {
      width: width - (2 * contentAreaSidePadding),
      backgroundColor: 'rgb(0, 174, 239)',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
      padding: 12,
      borderRadius: 6
    },
    closeContainer: {
      position: 'absolute',
      left: 10,
      top: 32,
    },
    closeImage: {
      width: 24,
      height: 24,
    }
});
