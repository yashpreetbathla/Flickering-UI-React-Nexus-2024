import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function StickyHeader() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  // Add the padding to content after the sticky header gets painted on the screen
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;

      setHeaderHeight(height);
    }
  }, []);

  return (
    <div>
      <header ref={headerRef} style={styles.header}>
        Sticky Header
      </header>
      <main style={{ ...styles.main, paddingTop: `${headerHeight}px` }}>
        <p>Content goes here...</p>
        {/* Add more content to make the page scrollable */}
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Content {i + 1}</p>
        ))}
      </main>
    </div>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "lightblue",
    padding: "20px",
    textAlign: "center",
    zIndex: 1000,
    color: "black",
  },
  main: {
    marginTop: "20px",
  },
};
