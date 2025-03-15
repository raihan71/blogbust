import { useNavigate, useLocation } from 'react-router';
import { IMAGE } from '../../constants/images.ts';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <view className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 shadow-md">
      <view className="flex items-center justify-around">
        {/* Home Menu */}
        <view
          bindtap={() => handleNavigation('/home')}
          className="flex flex-col items-center"
        >
          <image
            src={
              isActive('/home') || isActive('/')
                ? IMAGE.ICON_HOME_ACTIVE
                : IMAGE.ICON_HOME
            }
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <text
            className={`text-xs mt-1 ${isActive('/home') ? 'text-blue-500' : ''}`}
          >
            Home
          </text>
        </view>

        {/* Search Menu */}
        <view
          bindtap={() => handleNavigation('/search')}
          className="flex flex-col items-center"
        >
          <image
            src={
              isActive('/search') ? IMAGE.ICON_SEARCH_ACTIVE : IMAGE.ICON_SEARCH
            }
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <text
            className={`text-xs mt-1 ${isActive('/search') ? 'text-blue-500' : ''}`}
          >
            Search
          </text>
        </view>

        {/* Profile Menu */}
        <view
          bindtap={() => handleNavigation('/profile')}
          className="flex flex-col items-center"
        >
          <image
            src={
              isActive('/profile')
                ? IMAGE.ICON_PROFILE_ACTIVE
                : IMAGE.ICON_PROFILE
            }
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <text
            className={`text-xs mt-1 ${isActive('/profile') ? 'text-blue-500' : ''}`}
          >
            Profile
          </text>
        </view>
      </view>
    </view>
  );
};

export default BottomNavigation;
