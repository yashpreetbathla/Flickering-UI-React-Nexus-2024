import { useEffect, useRef, useState } from "react";

export default function DynamicWidthGrid() {
  const [columnWidths, setColumnWidths] = useState([]);
  const containerRef = useRef(null);


  // Set the width of cells after header cells are painted on the screen

  useEffect(() => {
    if (containerRef.current) {
      const columns = containerRef.current.querySelectorAll(".grid-column");
      const widths = Array.from(columns).map((col) => col.offsetWidth);
      setColumnWidths(widths);
    }
  }, []);

  return (
    <div ref={containerRef} style={styles.container}>
      <div style={styles.row}>
        <div
          className="grid-column"
          style={{ ...styles.column, width: columnWidths[0] }}
        >
          Header 1
        </div>
        <div
          className="grid-column"
          style={{ ...styles.column, width: columnWidths[1] }}
        >
          Header 2
        </div>
        <div
          className="grid-column"
          style={{ ...styles.column, width: columnWidths[2] }}
        >
          Header 3
        </div>
      </div>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} style={styles.row}>
          <div
            className="grid-row"
            style={{ ...styles.column, width: columnWidths[0] }}
          >
            Item {i + 1}AAAAA
          </div>
          <div
            className="grid-row"
            style={{ ...styles.column, width: columnWidths[1] }}
          >
            Item {i + 1}BBBBB
          </div>
          <div
            className="grid-row"
            style={{ ...styles.column, width: columnWidths[2] }}
          >
            Item {i + 1}CCCCC
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "block",
  },
  row: {
    display: "flex",
  },
  column: {
    padding: "10px",
    border: "1px solid #ccc",
  },
};
