import React, { useCallback, useEffect, useState } from "react";
import Tree from "./tree";
import Node from "./Node";
import styled from "styled-components";

const JSTree = ({
  tree,
  renderNode,
  collapseIconOpen,
  collapseIconClosed,
  paddingLeft,
}) => {
  const [treeState, setTreeState] = useState(null);

  const CaretRight = styled.div`
    position: relative;
    cursor: pointer;
    &:before {
      content: "+";
      position: relative;
      left: 5px;
      font-weight: bold;
      font-size: 16px;
    }
  `;

  const CaretDown = styled.div`
    position: relative;
    cursor: pointer;
    &:before {
      content: "-";
      position: relative;
      left: 5px;
      font-weight: bold;
      font-size: 16px;
    }
  `;

  const TreeDiv = styled.div`
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;

  const getTree = useCallback(() => {
    const treeItem = new Tree(tree);
    treeItem.renderNode = renderNode;
    treeItem.collapseIconOpen = collapseIconOpen || <CaretRight />;
    treeItem.collapseIconClosed = collapseIconClosed || <CaretDown />;
    return treeItem;
  }, [collapseIconOpen, collapseIconClosed, renderNode, tree]);

  useEffect(() => {
    const treeItem = getTree();
    treeItem.updateNodesPosition();
    setTreeState(treeItem);
  }, [getTree]);

  const toggleCollapse = (nodeId) => {
    const treeItem = getTree();
    const index = treeState.getIndex(nodeId);
    const node = index.node;
    node.collapsed = !node.collapsed;
    treeItem.updateNodesPosition();
    setTreeState(treeItem);
  };
  return treeState ? (
    <TreeDiv>
      <Node
        tree={treeState}
        index={treeState.getIndex(1)}
        key={1}
        paddingLeft={paddingLeft}
        onCollapse={toggleCollapse}
      />
    </TreeDiv>
  ) : null;
};
export default JSTree;
