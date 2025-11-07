import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button } from '@/button';
import './index.css';

// Import project components (we'll create these next)
const Project1 = React.lazy(() => import('./projects/Project1'));
const Project2 = React.lazy(() => import('./projects/Project2'));
const Project3 = React.lazy(() => import('./projects/Project3'));
const Project4 = React.lazy(() => import('./projects/Project4'));

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Combined Projects</h1>
          </div>
          <div className="flex space-x-4">
            <Link to="/">
              <Button variant={isActive('/') ? 'default' : 'outline'} size="sm">
                Home
              </Button>
            </Link>
            <Link to="/project1">
              <Button variant={isActive('/project1') ? 'default' : 'outline'} size="sm">
                Project 1
              </Button>
            </Link>
            <Link to="/project2">
              <Button variant={isActive('/project2') ? 'default' : 'outline'} size="sm">
                Project 2
              </Button>
            </Link>
            <Link to="/project3">
              <Button variant={isActive('/project3') ? 'default' : 'outline'} size="sm">
                Project 3
              </Button>
            </Link>
            <Link to="/project4">
              <Button variant={isActive('/project4') ? 'default' : 'outline'} size="sm">
                Project 4
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Combined Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This application combines four different Anima projects into one unified experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/project1" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project 1</h3>
                <p className="text-gray-600">Frame-based layout project</p>
              </div>
            </Link>
            <Link to="/project2" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project 2</h3>
                <p className="text-gray-600">Box layout project</p>
              </div>
            </Link>
            <Link to="/project3" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project 3</h3>
                <p className="text-gray-600">Another Box layout project</p>
              </div>
            </Link>
            <Link to="/project4" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Project 4</h3>
                <p className="text-gray-600">Advanced Box layout project</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <React.Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-lg">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;