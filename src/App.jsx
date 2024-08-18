import RanPivotTableComponent from 'ranpivot-table/dist/react/pivotTable'

function App() {
  const data = [
    { "Product": "Apple", "World": "Earth-5", "Category": "Fruits", "Region": "North", "Month": "January", "Sales": 120 },
    { "Product": "Banana", "World": "Earth-5", "Category": "Fruits", "Region": "North", "Month": "January", "Sales": 90 },
    { "Product": "Banana", "World": "Earth-1", "Category": "Fruits", "Region": "South", "Month": "January", "Sales": 90 },
    { "Product": "Carrot", "World": "Earth-5", "Category": "Vegetables", "Region": "North", "Month": "January", "Sales": 70 },
    { "Product": "Apple", "World": "Earth-5", "Category": "Fruits", "Region": "South", "Month": "February", "Sales": 130 },
    { "Product": "Banana", "World": "Earth-5", "Category": "Fruits", "Region": "South", "Month": "February", "Sales": 95 },
    { "Product": "Carrot", "World": "Earth-5", "Category": "Vegetables", "Region": "South", "Month": "February", "Sales": 75 },
    { "Product": "Apple", "World": "Earth-5", "Category": "Fruits", "Region": "North", "Month": "March", "Sales": 140 },
    { "Product": "Banana", "World": "Earth-2", "Category": "Fruits", "Region": "North", "Month": "March", "Sales": 100 },
    { "Product": "Carrot", "World": "Earth-5", "Category": "Vegetables", "Region": "North", "Month": "March", "Sales": 80 }
  ];

  const rowFields = ['Region', 'Category'];
  const columnFields = ['Product', 'Month', 'World'];
  const valueField = 'Sales';
  const aggregation = 'sum';

  return (
    <RanPivotTableComponent
      data={data}
      rowFields={rowFields}
      columnFields={columnFields}
      valueField={valueField}
      aggregationFunction={aggregation}
      heatmapOptions={{
        enableHeatmap: true,
        enableRowHeatmap: false,
        enableColHeatmap: false,
        showLegend: false,
      }}
    />
  )
}

export default App
