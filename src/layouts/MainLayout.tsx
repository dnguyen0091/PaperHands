import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Navigation/Sidebar';

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area with left margin for sidebar */}
      <div className="flex-1 ml-64">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;