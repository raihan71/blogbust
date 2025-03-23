const Scroller = ({ oritentation, children, styles }: any) => {
  return (
    <scroll-view scroll-orientation={oritentation} style={styles}>
      {children}
    </scroll-view>
  );
};

export default Scroller;
