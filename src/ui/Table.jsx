function Table({ columns, data, striped = false }) {
  // إضافة كلاس مخطط إذا كانت خاصية striped مفعلة
  const tableClassName = `custom-table ${striped ? 'table-striped' : ''}`;

  return (
    <div className="table-container">
      <table className={tableClassName}>
        {/* رؤوس الجدول */}
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>

        {/* جسم الجدول والبيانات */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* مرور على قيم الكائن لعرضها في الخلايا */}
              {Object.values(row).map((val, colIndex) => (
                <td key={colIndex}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;