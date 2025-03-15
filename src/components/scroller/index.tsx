import Horizontal from '../scroller-item/Horizontal.tsx';

const Scroller = ({ oritentation, children }: any) => {
  return (
    <scroll-view
      scroll-orientation={oritentation}
      style={{
        width: 'calc(100% - 1px)',
        height: '100px',
        paddingBottom: '20px',
        paddingTop: '20px',
        paddingLeft: '12px',
        paddingRight: '12px',
        borderRadius: '1px',
      }}
    >
      {children}
    </scroll-view>
  );
};

export default Scroller;
