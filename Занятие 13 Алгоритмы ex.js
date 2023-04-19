class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.str = "";
    this.root = null;
  }

  printTree(visit) {
    this.str = '';
    this._inOrder(this.root);
    return this.str;
  }

  _inOrder(root, visit) {
    if (root !== null) {
      this._inOrder(root.left, visit);
      this.str += `${root.value} `;
      this._inOrder(root.right, visit);
    }
  }

  preOrder(visit) {
    this._preOrder(this.root, visit);
  }

  _preOrder(root, visit) {
    if (root !== null) {
      visit(root.value);
      this._preOrder(root.left, visit);
      this._preOrder(root.right, visit);
    }
  }

  bracketPreOrder() {
    this.str = "";
    let arr = [];
    this._bracketPreOrder(this.root, arr);
    console.log(...arr);
    return this.str;
  }

  _bracketPreOrder(root, sb) {
    if (root !== null) {
      this.str += root.value;
      sb.push(root.value);

      if (root.left || root.right) {
        this.str += "(";
        sb.push("(");
        if (root.left) this._bracketPreOrder(root.left, sb);
        else {
          this.str += "null";
          sb.push("null");
        }
        this.str += ";";
        sb.push(";");
        if (root.right) this._bracketPreOrder(root.right, sb);
        else {
          this.str += "nulll";
          sb.push("null");
        }
        this.str += ")";
        sb.push(")");
      }
    }
  }

  search(findValue) {
    this.flag = false;
    this._search(this.root, findValue);
    return this.flag;
  }

  _search(root, value) {
    if (root !== null) {
      if (value === root.value) {
        this.flag = true;
        return;
      }
      if (!this.flag) this._search(root.left, value);
      if (!this.flag) this._search(root.right, value);
    }
  }

  treeBalanceBuild(countItem) {
    this.root = this._treeBalanceBuild(countItem);
  }

  _treeBalanceBuild(n) {
    let newTree = null;
    if (n === 0) {
      return null;
    } else {
      const left = Math.floor(n / 2);
      const right = n - left - 1;

      newTree = new TreeNode(n);
      newTree.left = this._treeBalanceBuild(left);
      newTree.right = this._treeBalanceBuild(right);
    }

    return newTree;
  }

  insertNode(value) {
    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    let temp = new TreeNode(value);
    if (node === null) {
      return temp;
    } else if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    }
    return node;
  }

  getHeight() {
    return this._getHeight(this.root);
  }
  _getHeight(node) {
    return node == null ? 0 : Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1;
  }

  getMaxValue() {
    // ....
  }

  getMinValue() {
    // ....
  }
}
let tree = new BinaryTree();

for (let i = 0; i < 10000; i++) {
  tree.insertNode(Math.floor(Math.random() * 1000000000));
}

console.log(tree.printTree());
console.log(tree.getHeight());

// написать функцию поиска максимального и минимального элемента