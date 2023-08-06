import React from 'react';

import { Typography } from 'antd';

import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import ErrorBoundary from './pages/ErrorBoundary';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

import './App.less';

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <div style={{ width: 300 }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/jsx">JSX</Link>
            </li>
            <li>
              <Link to="/component">Component</Link>
            </li>
            {/* <li>
              <Link to="/codespliting">CodeSpliting</Link>
            </li> */}
            <li>
              <Link to="/context">Context</Link>
            </li>
            <li>
              <Link to="/refs">Refs</Link>
            </li>
            <li>
              <Link to="/portals">Portals</Link>
            </li>
            <li>
              <Link to="/notUseES6">do not use es6</Link>
            </li>
            <li>
              <Link to="/render-props">Render Props</Link>
            </li>
            <li>
              <Link to="/un-controlled">Uncontrolled</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/useState">UseState</Link>
            </li>
            <li>
              <Link to="/useContext">useContext</Link>
            </li>
            <li>
              <Link to="/useReducer">UseReducer</Link>
            </li>
            <li>
              <Link to="/useSyncExternalStore">UseSyncExternalStore</Link>
            </li>
            <li>
              <Link to="/useTransition">UseTransition</Link>
            </li>
            <li>
              <Link to="/useDeferredValue">UseDeferredValue</Link>
            </li>
            <li>
              <Link to="/useImperativeHandle">UseImperativeHandle</Link>
            </li>
            <li>
              <Link to="/memo">Memo</Link>
            </li>
            <li>
              <Link to="/useMemo">UseMemo</Link>
            </li>
            <li>
              <Link to="/useCallback">UseCallback</Link>
            </li>
            <li>
              <Link to="/customHooks">CustomHooks</Link>
            </li>
            <li>
              <Link to="/lodash">Lodash</Link>
            </li>
            <li>
              <Link to="/slider">SimpleSlider</Link>
            </li>
            <li>
              <Link to="/antd">Antd</Link>
            </li>
            <li>
              <Link to="/scroller">Scroller</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              <Link to="/props">Props</Link>
            </li>
            <li>
              <Link to="/lifeCycle">LifeCycle</Link>
            </li>
            <li>
              <Link to="/suspense">Suspense</Link>
            </li>
            <li>
              <Link to="/timeSlicing">TimeSlicing</Link>
            </li>
            <li>
              <Link to="/scrollView">ScrollView</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/hoc">HOC</Link>
            </li>
            <li>
              <Link to="/mini">MiniRouter</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: 20 }}>
      <ErrorBoundary>
        <Typography.Title>React Learn</Typography.Title>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Welcome />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
