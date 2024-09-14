import * as React from 'react';
import { HelperText, TextInput as TIp, TextInputProps } from 'react-native-paper';

interface CustomTextInputProps extends TextInputProps {
  helpText?: string | null;
}

const TextInput: React.FC<CustomTextInputProps> = ({
  helpText = null,  // Usando parâmetro padrão
  ...props
}) => {
  return (
    <>
      <TIp {...props} />
      {helpText ? <HelperText type="error" visible={true}>{helpText}</HelperText> : null}
    </>
  );
};

export default TextInput;
