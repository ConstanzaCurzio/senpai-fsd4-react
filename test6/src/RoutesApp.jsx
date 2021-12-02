import React from 'react';
import { Routes, Route } from 'react-router-dom';

import routePaths from './routePaths';
import Greeting from './pages/home/Greeting';
import Counter from './pages/counter/Counter';
import TaskList from './pages/tasks/TaskList';
import Product from './pages/product/Product';
import NotFound from './pages/not-found/NotFound';
import TreeImage from './pages/tree-image/TreeImage';

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path={routePaths.index} element={<Greeting />} />
        <Route path={routePaths.counter} element={<Counter />} />
        <Route path={routePaths.tasks} element={<TaskList />} />
        <Route path={routePaths.product} element={<Product />} />
        <Route path={routePaths.treeImage} element={<TreeImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
