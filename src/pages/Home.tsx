import Horizontal from '../components/scroller-item/Horizontal.tsx';
import Scroller from '../components/scroller/index.tsx';
import { categories } from '../constants/categories.ts';

const Home = () => {
  return (
    <view>
      <view className="bg-stone-100">
        <Scroller oritentation="horizontal">
          {categories.map((item, index) => (
            <Horizontal index={index} item={item} />
          ))}
        </Scroller>
      </view>
    </view>
  );
};

export default Home;
