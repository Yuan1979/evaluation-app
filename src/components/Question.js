import React from "react";
import { Text, View, ScrollView } from 'react-native'
import { Button, Checkbox, List, WhiteSpace, WingBlank } from '@ant-design/react-native'
import styles from './styles'

const CheckboxItem = Checkbox.ChekcBoxItem;

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            answers: [],
            startUrl: props.startUrl
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmitQuestionnaire = this.handleSubmitQuestionnaire.bind(this);
    }

    static navigationOptions = {
        title: 'Evaluation'
    }

    handleTextChange(e, questionId) {
        var values = {
            subQuestionId: 0,
            value: e.target.value
        }

        var answer = {
            questionId: questionId,
            values: values
        };

        this.setState({
            answers: answer
        });
    }

    handleSubmitQuestionnaire(){
        let { answers } = this.state;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
            }
        });

        xhr.open("POST", "https://eval-app.azurewebsites.net/api/v1/forms/1/responses");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "b36d0504-5bb4-42e8-9185-95aeac9a0213");

        xhr.send(answers);
    }

    generateGradingRangeLabels(question) {
        if (!question.range.minText || !question.range.maxText) {
            return null;
        }
        return (
            `${question.range.min}: ${question.range.minText}, ${question.range.max}: ${question.range.maxText}`
        );
    }

    getFooter() {
        return (
            <View style={{ padding: 20, textAlign: 'center' }}>
                <Button type="primary" size="large" onClick={this.handleSubmitQuestionnaire} title="Submit"/>
            </View>
        );
    }

    getQuestions() {
        let questions = this.props.navigation.state.params.questions;

        return questions.map((question) => {
            if (question.type === "multiple") {
                return (
                    <View>
                        <Text style={styles.titleText}>{question.id} <Text style={styles.baseText}>{question.phrase}</Text></Text>
                        {question.alternatives.map(alt => {
                           return (
                               <Checkbox.CheckboxItem>alt.value</Checkbox.CheckboxItem>
                           );
                        })}
                    </View>
                );
            }
            /*
            if (question.type === "grading") {
                return (
                    <View style={styles.questionContainer}>
                        <Text style={styles.titleText}>{question.id} {question.phrase}</Text>
                        {question.subQuestions.map(subQuestion => {
                                return (
                                    <View>
                                        <Grid>
                                            <Col>
                                            <Text style={styles.baseText}>{subQuestion.value}</Text>
                                            </Col>
                                            <Col>
                                            <Rating style={styles.rating} ratingCount={6} imageSize={20}/>
                                            </Col>
                                        </Grid>
                                    </View>
                                );
                            })}                        
                    </View>
                );
            }

            if (question.type === "single") {
                choices = question.alternatives.map(alt => {
                    return ({
                        label: alt.value, 
                        id: alt.id,
                    })
                });
               return (
                    <View style={styles.questionContainer}>
                        <Text style={styles.titleText}>{question.id} {question.phrase}</Text>
                        <RadioGroup options={choices}/>
                    </View>
                );
            }

            if (question.type === "freetext") {
                return (
                    <View style={styles.questionContainer}>
                        <View>
                            <Text style={styles.baseText}>{question.phrase}</Text>
                            <Input style={styles.textarea} rows="2" onChange={e => this.handleTextChange(e, question.id)}/>
                        </View>
                    </View>
                );
            }
            */
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentStyle={styles.questionaireContainer}>
                    {this.getQuestions()}
                    {this.getFooter()}
                </ScrollView>
            </View>
        );
    }
}