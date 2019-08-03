import React from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

const DODGER_BLUE = '#428AF8';
const SILVER = "#BEBEBE";

const FormTextInput = ({ style, ...rest }) => (
    <TextInput selectionColor={DODGER_BLUE}  style={[styles.textInput, style]} {...rest} />
);

FormTextInput.propTypes = {
    style: Text.propTypes.style
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default FormTextInput;
