import React from 'react';
import {
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

const DODGER_BLUE = '#428AF8';
const SILVER = "#BEBEBE";

const FormPwdInput = ({ style, ...rest }) => (
    <TextInput selectionColor={DODGER_BLUE} underlineColorAndroid='transparent' secureTextEntry={true}
    style={[styles.textInput, style]} {...rest} />
);

FormPwdInput.propTypes = {
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

export default FormPwdInput;
