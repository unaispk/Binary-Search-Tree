class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertionHelper(this.root, node);
        }
    }
    insertionHelper(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertionHelper(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertionHelper(root.right, node);
            }
        }
    }

    contains(value) {
        let curr = this.root;
        while (curr != null) {
            if (value < curr.value) {
                curr = curr.left;
            } else if (value > curr.value) {
                curr = curr.right;
            } else {
                return true;
            }
        }
        return false;
    }

    perOrder() {
        this.perOrderHelper(this.root);
    }
    perOrderHelper(root) {
        if (root) {
            console.log(root.value);
            this.perOrderHelper(root.left);
            this.perOrderHelper(root.right);
        }
    }

    inOrder(){
        this.inOrderHelper(this.root);
    }
    inOrderHelper(root){
        if(root){
            this.inOrderHelper(root.left);
            console.log(root.value);
            this.inOrderHelper(root.right);
        }
    }

    postOrder(){
        this.postOrderHelper(this.root);
    }
    postOrderHelper(root){
        if(root){
            this.postOrderHelper(root.left);
            this.postOrderHelper(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    delete(value){
        return this.deleteHelper(this.root,value);
    }
    deleteHelper(root,value){
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteHelper(root.left,value);
        }else if(value > root.value){
            root.right = this.deleteHelper(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteHelper(root.right,root.value);
        }
        return root;
    }
   
   
}

const binary = new binarySearchTree;

binary.insert(10);
binary.insert(8);
binary.insert(15);
binary.insert(4);
binary.insert(3);
binary.insert(14);
binary.insert(17);

binary.delete(10);

console.log(binary.contains(10));

console.log('preOrder');
binary.perOrder();
console.log('inOrder');
binary.inOrder();
console.log('postOrder');
binary.postOrder();
console.log('levelOrder');
binary.levelOrder();
