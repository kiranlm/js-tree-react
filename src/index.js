import React, { useCallback, useEffect, useState } from "react";
import Tree from "./tree";
import Node from "./Node";
import * as styles from "./tree.css";

const LMTree = ({
  tree,
  renderNode,
  collapseIconOpen,
  collapseIconClosed,
  paddingLeft,
}) => {
  const [treeState, setTreeState] = useState(null);

  const getTree = useCallback(() => {
    const treeItem = new Tree(tree);
    treeItem.renderNode = renderNode;
    treeItem.collapseIconOpen = collapseIconOpen || (
      <span className={styles.caretRight} />
    );
    treeItem.collapseIconClosed = collapseIconClosed || (
      <span className={styles.caretDown} />
    );
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
    <div className={styles.lmTree}>
      <Node
        tree={treeState}
        index={treeState.getIndex(1)}
        key={1}
        paddingLeft={paddingLeft}
        onCollapse={toggleCollapse}
      />
    </div>
  ) : null;
};
export default LMTree;
