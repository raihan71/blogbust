import Horizontal from '../components/scroller-item/Horizontal.tsx';
import Vertical from '../components/scroller-item/Vertical.tsx';
import Scroller from '../components/scroller/index.tsx';
import { blogs } from '../constants/blogs.ts';
import { categories } from '../constants/categories.ts';
import { IMAGE } from '../constants/images.ts';

const Home = () => {
  return (
    <view>
      <view className="bg-stone-100">
        <Scroller
          oritentation="horizontal"
          styles={{
            width: 'calc(100% - 1px)',
            height: '100px',
            paddingBottom: '20px',
            paddingTop: '20px',
            paddingLeft: '12px',
            paddingRight: '12px',
            borderRadius: '1px',
          }}
        >
          {categories.map((item, index) => (
            <Horizontal index={index} item={item} />
          ))}
        </Scroller>
      </view>
      <view className="h-full p-4">
        <view className="flex justify-between items-center">
          <text className="font-bold leading-normal text-2xl">Games</text>
          <image src={IMAGE.ICON_FILTER} className="w-6 h-6" />
        </view>
        <Scroller
          oritentation="vertical"
          styles={{
            width: 'calc(100% - 1px)',
            height: '500px',
          }}
        >
          {blogs.map((item, index) => (
            <Vertical item={item} />
          ))}
        </Scroller>
      </view>
    </view>
  );
};

export default Home;
