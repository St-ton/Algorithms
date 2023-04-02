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
    this.str = "";
    this.root = value;
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
          this.str += "nil";
          sb.push("nil");
        }
        this.str += ";";
        sb.push(";");
        if (root.right) this._bracketPreOrder(root.right, sb);
        else {
          this.str += "nil";
          sb.push("nil");
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

  // ***
  // todo добавить возможность удаления узла из дерева. т е написать метод removeNode(value){...};

  removeNode(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(root, value) {
    if (root === null) {
      return null;
    } else if (value < root.value) {
      root.left = this._removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this._removeNode(root.right, value);
    } else {
      if (root.left === null && root.right === null) {
        root = null;
      } else if (root.left === null) {
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      } else {
        let minNode = this._findMin(root.right);
        root.value = minNode.value;
        root.right = this._removeNode(root.right, minNode.value);
      }
    }
    return root;
  }

  _findMin(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }

  // метод removeNode(value) принимает значение, которое нужно удалить из дерева, и вызывает вспомогательный метод _removeNode, который проходит по дереву и удаляет узел с заданным значением. Если удаляемый узел имеет двух потомков, мы заменяем его на минимальный узел из правого поддерева и рекурсивно удаляем этот минимальный узел. Если удаляемый узел имеет только одного потомка, мы заменяем его на этого потомка. Если удаляемый узел не имеет потомков, мы просто удаляем его.Метод _removeNode в свою очередь вызывает вспомогательный метод _findMin, который находит минимальный узел в дереве.

  // ***
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
