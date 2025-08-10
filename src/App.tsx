import { Outlet } from '@tanstack/react-router';

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <Outlet />
    </div>
  );
}

