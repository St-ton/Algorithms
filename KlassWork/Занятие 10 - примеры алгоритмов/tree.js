class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null;
  }
}

let me = new Node('1');
let dad = new Node('11');
let mom = new Node('12');
me.left = dad;
me.right = mom;

let n11 = new Node('111');
let n12 = new Node('112');
let n111 = new Node('121');
let n112 = new Node('122');
me.left.left = n11;
me.left.left = n12;
me.right.left = n111;
me.right.right = n112;

n11.right = new Node('Eliz');

class Traversal {
  constructor() {
    this.preOrder3 = (root, sp = "") => {
      if (root !== null) {
        console.log(`${sp}${root.value}`);
        if (root.right !== null) PreOrder(root.right, sp + "  ")
        if (root.left !== null) PreOrder(root.left, sp + "  ")
      }
    }

    this.st = "";
    this.preOrder2 = (root) => {
      if (root !== null) {
        this.st += `${root.value}`;
        if (root.right !== null || root.left !== null) {
          this.st += '(';
          if (root.right !== null) this.preOrder2(root.right)
          else this.st += 'null';
          this.st += ',';

          if (root.left !== null) this.preOrder2(root.left)
          else this.st += 'null';
          this.st += ')';
        }
      }
    }

    this.preOrder = (root) => {
      this.st = "";
      this.preOrder2(root);
      return this.st;
    }
  }
}

let tr = new Traversal();
let res1 = tr.preOrder(me);
let res2 = tr.preOrder(me);


console.log(res1);
console.log(res2);

