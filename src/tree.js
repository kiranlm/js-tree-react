let Tree = require("js-tree");
let proto = Tree.prototype;

proto.updateNodesPosition = function () {
  let top = 1;
  let left = 1;
  let root = this.getIndex(1);
  let self = this;

  root.top = top++;
  root.left = left++;

  if (root.children && root.children.length) {
    walk(root.children, root, left, root.node.collapsed);
  }

  function walk(children, parent, left, collapsed) {
    let height = 1;
    children.forEach(function (id) {
      let node = self.getIndex(id);
      if (collapsed) {
        node.top = null;
        node.left = null;
      } else {
        node.top = top++;
        node.left = left;
      }

      if (node.children && node.children.length) {
        height += walk(
          node.children,
          node,
          left + 1,
          collapsed || node.node.collapsed
        );
      } else {
        node.height = 1;
        height += 1;
      }
    });

    if (parent.node.collapsed) parent.height = 1;
    else parent.height = height;
    return parent.height;
  }
};

module.exports = Tree;
