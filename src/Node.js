import React from "react";

const LMTreeNode = (props) => {
  const { index, tree } = props;

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
        <div className="children" style={childrenStyles}>
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
  const styles = {};

  return (
    <div className="lmNode" style={styles}>
      <div className="inner">
        {renderCollapse()}
        {tree.renderNode(node)}
      </div>
      {node.collapsed ? null : renderChildren()}
    </div>
  );
};

export default LMTreeNode;
