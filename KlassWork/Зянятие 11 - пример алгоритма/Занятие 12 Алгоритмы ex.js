class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    // this.root = new TreeNode(value);
    this.str = '';
    this.root = value;
  }

  preOrder(visit) {
    this._preOrder(this.root, visit);
  }

  _preOrder(root, visit) {
    if (root !== null) {
      visit(root.value);
      this._preOrder(root.left, visit)
      this._preOrder(root.right, visit)
    }
  }

  bracketPreOrder() {
    this.str = '';
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
        this.str += '(';
        sb.push('(');
        if (root.left) this._bracketPreOrder(root.left, sb);
        else {
          this.str += 'nil';
          sb.push('nil');
        }
        this.str += ';';
        sb.push(';');
        if (root.right) this._bracketPreOrder(root.right, sb);
        else {
          this.str += 'nil';
          sb.push('nil');
        }
        this.str += ')';
        sb.push(')');
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
}

let tree = new TreeNode(10);
tree.left = new TreeNode(10);
tree.left.left = new TreeNode(40);
tree.left.right = new TreeNode(50);
tree.left.right.left = new TreeNode(70);
tree.left.right.right = new TreeNode(80);

tree.right = new TreeNode(30);
tree.right.left = new TreeNode(60);
tree.right.left.right = new TreeNode(90);
//10(20(40,50(70,80)),30(60(nil,90),nil)) 
let bt = new BinaryTree(tree);
// console.log(bt.bracketPreOrder());
// bt._preOrder(bt.root, console.log);
bt.preOrder(console.log);

console.log(bt.search(10)); // true
console.log(bt.search(70)); // true
console.log(bt.search(33)); // false