import { IMAGE } from '../../constants/images.ts';
import { truncateText } from '../../utils/formatText.ts';

const Vertical = ({ item }: any) => {
  return (
    <view className="mt-3 flex items-center justify-center w-full border border-slate-200 rounded-xl shadow-xl bg-white p-1">
      <image
        className="m-2 p-2 rounded-2xl bg-slate-200"
        style={{
          width: '150px',
          height: '110px',
          objectFit: 'cover',
        }}
        src={IMAGE.ICON_REACTLYNX}
      />
      <view className="flex flex-col pt-2 pb-2 pl-0 pr-2">
        <text className="font-semibold text-ellipsis">{item?.title}</text>
        <text className="text-xs text-gray-500 mt-1">{item?.date}</text>
        <text className="text-gray-600 text-sm text-justify mt-1">
          {truncateText(item?.content, 105)}
        </text>
      </view>
    </view>
  );
};

export default Vertical;
