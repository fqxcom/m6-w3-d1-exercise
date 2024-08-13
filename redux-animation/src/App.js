import './App.css';
import BarChart from './BarChart';
import React from 'react';
import Tree from "./Tree";
import data from "./data";
import { Link,BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";
import Home from './Home';
import AppNavbar from './Navbar';

function Example() {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

function TreeNode() {
  return (
    <Tree data={data} width={600} height={500} />
  )
}
function App() {
  return (
    <Router>
      <AppNavbar />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/barchart' exact={true} component={BarChart} />
          <Route path='/tree' exact={true} component={TreeNode} />
          <Route path='/lightorb' exact={true} component={Example} />
        </Switch>
      </Router>
  );
}

export default App;

{/* <div>
      <BarChart />
      <Tree data={data} width={600} height={500} />
      <Example />
    </div> */}