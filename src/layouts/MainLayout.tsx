import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Navigation/Sidebar';

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area - flexbox handles the spacing */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;