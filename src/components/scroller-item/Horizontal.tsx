import React from 'react';
import { IMAGE } from '../../constants/images.ts';

const Horizontal = ({ index, item }: any) => {
  return (
    <view
      key={index}
      className="flex flex-col items-center justify-center bg-slate-50 shadow-lg border border-slate-200 rounded-2xl w-20 mr-2"
    >
      <image
        src={item?.icon || IMAGE.ICON_ANDROID}
        style={{
          width: '20px',
          height: '20px',
          objectFit: 'contain',
        }}
      />
      <text className="text-sm mt-1">{item?.name}</text>
    </view>
  );
};

export default Horizontal;
