import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

import style from './style';

class Seasons extends PureComponent {
    renderSeasons() {
        let items = [];

        for (let i = 0; i < 20; i++) {
            const year = '20'+ (i > 9 ? i : `0${i}`);
            items.push(
                <Button
                    onPress={ () => this.props.temporada(year) }
                    key={ `season-${i}` }>
                    <Text>
                        { year }
                    </Text>
                </Button>
            );
        }

        return items;
    }

    render() {
        return(
            <View style={ style.container }>
                { this.renderSeasons() }
            </View>
        );
    }
}

export default Seasons;