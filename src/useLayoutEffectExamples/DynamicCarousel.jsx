import { useEffect, useRef, useState } from "react";

export default function DynamicCarousel() {
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);

  // After the component is mounted, calculate the width of each item based on the container width
  useEffect(() => {
    const updateItemWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
       
        setItemWidth(containerWidth / 3); // Show 3 items at a time
      }
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => {
      window.removeEventListener("resize", updateItemWidth);
    };
  }, [containerRef?.current?.offsetWidth]);

  return (
    <div ref={containerRef} style={styles.container}>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} style={{ ...styles.item, width: `${itemWidth}px` }}>
          Item {i + 1}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    overflowY: "scroll",
  },
  item: {
    flexShrink: 0,
    margin: "10px",
    padding: "20px",
    backgroundColor: "lightblue",
    textAlign: "center",
    color: 'black'
  },
};
