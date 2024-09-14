import * as React from 'react';
import { Switch, SwitchProps } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';

// Definição das props personalizadas para o SwitchComponent
interface CustomSwitchProps extends SwitchProps {
  disabled?: boolean;
  value: boolean;
  color?: string;
  onValueChange: (value: boolean) => void;
  style?: object;
  theme?: object;
}

// Componente genérico para Switch com todas as props
const SwitchC: React.FC<CustomSwitchProps> = ({
  disabled = false,
  value,
  color,
  onValueChange,
  style,
  theme
}) => {
  return (
    <ScrollView style={[styles.container, style]}>
      <Switch
        disabled={disabled}
        value={value}
        color={color}
        onValueChange={onValueChange}
        style={style}
        theme={theme}
      />
    </ScrollView>
  );
};

// Estilos adicionais
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default SwitchC;
