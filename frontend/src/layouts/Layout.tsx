import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Settings,
  Folder,
  FileText,
  Brain,
  Pencil,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import Miranda from '../components/Miranda';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/setup', label: 'Setup', icon: <Settings size={18} /> },
    { path: '/project', label: 'Project', icon: <Folder size={18} /> },
    { path: '/editor', label: 'Editor', icon: <FileText size={18} /> },
    { path: '/brainstorm', label: 'Brainstorm', icon: <Brain size={18} /> },
    { path: '/write', label: 'Write', icon: <Pencil size={18} /> },
    { path: '/outputs', label: 'Outputs', icon: <BookOpen size={18} /> },
    { path: '/chat', label: 'Chat', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-6">Nell</h2>
        <nav className="flex flex-col gap-2 text-sm">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 ${
                location.pathname === path ? 'bg-blue-100 font-medium' : 'text-gray-700'
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 border-b flex items-center px-6 bg-white shadow-sm">
          <span className="font-medium">🧠 Project: Demo (static for now)</span>
        </header>

        {/* Page content */}
        <section className="p-6 overflow-y-auto flex-1 bg-white">
          {children}
        </section>
      </main>

      {/* Miranda Assistant */}
      <Miranda />
    </div>
  );
}

