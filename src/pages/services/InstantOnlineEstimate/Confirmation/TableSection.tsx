import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

interface TableSectionProps {
  columns: string[];           
  rows: string[][];           
  templateColumns?: string;    
}

const TableSection = ({
  columns,
  rows,
  templateColumns,
}: TableSectionProps) => {
  const template = templateColumns || `repeat(${columns.length}, 1fr)`;

  return (
    <Box border="1px solid" borderColor="gray.200" overflow="hidden">
      {/* Header Row */}
      <Grid templateColumns={template}>
        {columns.map((col) => (
          <GridItem key={col} bg="brand.primary" px={4} py={3}>
            <Text color="brand.white" fontWeight="medium" textStyle="size-lg">
              {col}
            </Text>
          </GridItem>
        ))}
      </Grid>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <Grid key={rowIndex} templateColumns={template}>
          {row.map((cell, cellIndex) => (
            <GridItem
              key={cellIndex}
              bg="brand.white"
              px={4}
              py={4}
              borderTop="1px solid"
              borderColor="gray.100"
            >
              <Text fontWeight="normal" textStyle="size-lg">
                {cell}
              </Text>
            </GridItem>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default TableSection;