import React from 'react';
import { DataTable } from 'react-native-paper';
import { View, StyleSheet, Button } from 'react-native';

// Definição da interface para as colunas
interface Column {
  label?: string;
  key: string;
}

// Definição das props do componente
interface DataTableProps {
  columns: Column[];
  data: { [key: string]: any }[];
  page: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
}

const dTable: React.FC<DataTableProps> = ({
  columns,
  data,
  page,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [5, 10, 15]
}) => {
  // Calcula os dados paginados
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);
  const paginatedData = data.slice(from, to);

  return (
    <View style={styles.container}>
      <DataTable>
        {/* Cabeçalho da tabela */}
        <DataTable.Header>
          {columns.map((column, index) => (
            <DataTable.Title key={index}>{column.label || column.key}</DataTable.Title>
          ))}
        </DataTable.Header>

        {/* Corpo da tabela (dados paginados) */}
        {paginatedData.map((row, rowIndex) => (
          <DataTable.Row key={rowIndex}>
            {columns.map((column, colIndex) => (
              <DataTable.Cell key={colIndex}>{row[column.key]}</DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}
      </DataTable>

      {/* Componente de Paginação */}
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={onPageChange}
        label={`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, data.length)} de ${data.length}`}
        showFastPaginationControls
      />

      {/* Adiciona um seletor para controlar o itemsPerPage */}
      <View style={styles.itemsPerPageContainer}>
        <Button
          title="Items por página"
          onPress={() => {}}
        />
        {itemsPerPageOptions.map((option) => (
          <Button
            key={option}
            title={`${option}`}
            onPress={() => onItemsPerPageChange(option)}
          />
        ))}
      </View>
    </View>
  );
};

// Estilos adicionais
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemsPerPageContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default dTable;
