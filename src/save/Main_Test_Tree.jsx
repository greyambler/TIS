import React, { Component, PropTypes } from 'react';
import './panel.css';
import cx from 'classnames';
import tree from './tree';

import './lib/react-ui-tree.css';
import Tree from './lib/react-ui-tree.js';

export default class Main_Test_Tree extends React.Component {
   constructor(props) {
      super(props);
      //this.updateTree = this.updateTree.bind(this);
      this.state = {
         active: null,
         tree: tree
      };
   }

   renderNode = node => {
      return (
         <span className={cx('node', {
            'is-active': node === this.state.active
         })}
            onClick={this.onClickNode.bind(null, node)}
         >
            {node.module}
         </span>
      );
   };

   onClickNode = node => {
      this.setState({
         active: node
      });
   };
   handleChange = tree => {
      this.setState({
         tree: tree
      });
   };

   updateTree = () => {
      const { tree } = this.state;
      tree.children.push({ module: 'test' });
      this.setState({
         tree: tree
      });
   };

   render() {
      return (
         <div className="app">
            <div className="tree">
               <Tree
                  paddingLeft={20}
                  tree={this.state.tree}
                  onChange={this.handleChange}
                  isNodeCollapsed={this.isNodeCollapsed}
                  renderNode={this.renderNode}
               />
            </div>
            <div className="inspector">
               <button onClick={this.updateTree}>update tree</button>
            </div>
         </div>
      );
   }
}
