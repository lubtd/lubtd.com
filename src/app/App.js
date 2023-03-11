import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from 'react-router-dom';

import Headermain from '../header';
import AppRoutes from './routes';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot"></div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
