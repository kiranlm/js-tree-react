import React from "react";
import styled from "styled-components";

const LMTreeNode = (props) => {
  const { index, tree } = props;

  const TreeNode = styled.div`
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;

  const TreeInner = styled.div`
    position: relative;
    cursor: pointer;
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: max-content;
  `;

  const renderCollapse = () => {
    if (index.children && index.children.length) {
      const { collapsed } = index.node;
      const { collapseIconOpen, collapseIconClosed } = tree;

      return (
        <div onClick={handleCollapse}>
          {collapsed ? collapseIconOpen : collapseIconClosed}
        </div>
      );
    }

    return null;
  };

  const renderChildren = () => {
    if (index.children && index.children.length) {
      const childrenStyles = {
        paddingLeft: props.paddingLeft,
      };

      return (
        <div style={childrenStyles}>
          {index.children.map((child) => {
            const childIndex = tree.getIndex(child);

            return (
              <LMTreeNode
                tree={tree}
                index={childIndex}
                key={childIndex.id}
                paddingLeft={props.paddingLeft}
                onCollapse={props.onCollapse}
              />
            );
          })}
        </div>
      );
    }

    return null;
  };

  const handleCollapse = (e) => {
    e.stopPropagation();
    const nodeId = props.index.id;

    if (props.onCollapse) {
      props.onCollapse(nodeId);
    }
  };

  const { node } = index;

  return (
    <TreeNode>
      <TreeInner>
        {renderCollapse()}
        {tree.renderNode(node)}
      </TreeInner>
      {node.collapsed ? null : renderChildren()}
    </TreeNode>
  );
};

export default LMTreeNode;
