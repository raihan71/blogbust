import { Routes, Route } from 'react-router';
import Home from '../../pages/Home.tsx';

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <view>
            <text>Hello profile</text>
          </view>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route
        path="/search"
        element={
          <view>
            <text>Hello search</text>
          </view>
        }
      />
    </Routes>
  );
};

export default RouteApp;
