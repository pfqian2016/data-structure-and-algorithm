/**
 * 二叉树
 */
 function BinaryTree() {
     function Node(data) {
         this.data = data;
         this.leftNode = null;
         this.rightNode = null;
     }
     let root = new Node('1');
     let firstNode = new Node('2');
     let secondNode = new Node('3');
     root.leftNode = firstNode;
     root.rightNode = secondNode;
     let thirdNode = new Node('4');
     let forthNode = new Node('5');
     firstNode.leftNode = thirdNode;
     firstNode.rightNode = forthNode;
     return root;
 }
/**
 * 先序遍历
 */
 function preOrderTrav(biTree, fn) {
     fn.call(null,node.data);
     if(node.leftNode !== null) {
         traverse(node.leftNode, fn);
     }
     if(node.rightNode !== null) {
         traverse(node.rightNode, fn);
     }
 }
/**
 * 中序遍历
 */
 function midOrderTrav(biTree, fn) {
     if(node.leftNode !== null) {
         traverse(node.leftNode, fn);
     }
     fn.call(null,node.data);
     if(node.rightNode !== null) {
         traverse(node.rightNode, fn);
     }
 }
/**
 * 后序遍历
 */
 function postOrderTrav(biTree, fn) {
     if(node.leftNode !== null) {
         traverse(node.leftNode, fn);
     }
     if(node.rightNode !== null) {
         traverse(node.rightNode, fn);
     }
     fn.call(null,node.data);
 }
