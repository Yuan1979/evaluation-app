import React from "react";
import styles from './styles'
import { View, Text } from "react-native"
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native'

export default class FrontPage extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Welcome'
    }

    render() {
        const data = JSON.stringify(require('./questionnaire.json'))
        const questions = JSON.parse(data).questions
        return (
            <View style={styles.container}>
                <WingBlank>
                    <Text style={styles.titleText}> How was your experience today? </Text>
                </WingBlank>
                <WhiteSpace/>
                <WingBlank style={{marginTop: 50, stretch: true}}>
                    <Button 
                        type="primary"
                        onPress={() => {
                            this.props.navigation.setParams({
                              data: {questions},
                            });
                            this.props.navigation.navigate('Questionaire', { questions });
                        }}
                    >Click Here!</Button>
                </WingBlank>
            </View>
        );
    }
}