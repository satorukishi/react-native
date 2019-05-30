import React, { PureComponent } from 'react';
import { Image, Platform } from 'react-native';

import Logo from '../../assets/logo.png'

class LogoTitle extends PureComponent {
    render() {
        const style = Platform.OS === 'ios' ?
            { width: 64, height: 64 } :
            {
                width: 64,
                height: 64,
                position: 'absolute',
                left: '50%',
                marginLeft: -55
            };

        return (<Image style={ style } source={ Logo } />)
    }
}

export default LogoTitle;