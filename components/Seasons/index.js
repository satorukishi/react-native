import React, { PureComponent } from 'react';
import { Button, TouchableHighlight, View } from 'react-native';

import style from './style';

class Seasons extends PureComponent {
    renderSeasons() {
        let items = [];

        for (let i = 0; i < 20; i++) {
            const year = '20'+ (i > 9 ? i : `0${i}`);
            items.push(
                <TouchableHighlight 
                    style={ style.botaoEspaco}
                    key={ `th-${i}`}>
                    <Button
                        color="#fe1e00"
                        onPress={ () => this.props.temporada(year) }
                        key={ `season-${i}` }
                        title={year}>
                    </Button>
                </TouchableHighlight> 
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