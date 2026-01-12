import { Outlet } from 'react-router-dom';
// import Header from '../components/Helper/header.tsx';

function MainLayout() {
  return (
    <div className="app-container">
      {/* <Header /> */}
      
      {/* Content area */}
      <div className="content-container">
        {/* NavPill centered */}
        {/* <div className="nav-pill-wrapper">
          <NavPill />
        </div> */}

        {/* Main content area */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;