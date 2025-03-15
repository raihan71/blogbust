import Header from './components/header/index.tsx';
import BottomNavigation from './components/navigations/index.tsx';
import RouteApp from './components/routes/index.tsx';

export default function App() {
  return (
    <view>
      <Header />
      <RouteApp />
      <BottomNavigation />
    </view>
  );
}
