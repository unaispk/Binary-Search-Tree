class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    //INSERTION_________________________________________________________________________________________
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {          // there is no node exist
            this.root = newNode;
        } else {   // there is node
            this.insertNode(this.root, newNode); // calling the function
        }
    }
    insertNode(root, newNode) {  //defining
        if (newNode.value < root.value) {   //new node value is lesser than root
            if (root.left === null) {       //there is no value in left , then
                root.left = newNode;
            } else {     //there is  value in left
                this.insertNode(root.left, newNode);     //recursion   
            }
        } else {  //new node value is greater than root
            if (root.right === null) {       //there is no value in right , then
                root.right = newNode;
            } else {  //there is  value in right
                this.insertNode(root.right, newNode);
            }
        }
    }
    //CONTAINS________________________________________________________________________________________
    search(root, value) {   //search -> (-----     contain(root, value){}  ---- )
        if (!root) {   // tree is empty
            return false;
        } else { // tree has value
            if (root.value === value) {
                return true;
            } else if (value < root.value) {   //   value is lesser than root
                return this.search(root.left, value); //recursion. now root.left act as root
            } else { //  value is greater than root
                return this.search(root.right, value); //recursion. now root.right act as root
            }
        }
    }//_____________________________________________________________________________________________________

    //TRAVERSAL
    /*    DFS   */
    //PRE-ORDER //------------------------------------------------------------------------------------//
    preOrder(root) {
        if (root) { //root has a value, ie., tree is not empty
            console.log(root.value);
            this.preOrder(root.left); // recursion - Here left act as root
            this.preOrder(root.right); // recursion - Here right act as root
        }
    }//-----------------------------------------------------------------------------------------------//

    //IN-ORDER  //------------------------------------------------------------------------------------*
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);  // recursion - Here left act as root
            console.log(root.value);
            this.inOrder(root.right); // recursion - Here right act as root
        }
    }//-----------------------------------------------------------------------------------------------*

    //Post-Order //-----------------------------------------------------------------------------------//
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);    // recursion - Here left act as root
            this.postOrder(root.right);   // recursion - Here right act as root
            console.log(root.value);
        }
    }//-----------------------------------------------------------------------------------------------//

    //_________________________________________________________________________________________________________
    //    BFS
    //TRAVERSAL 
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) { //works untill values exists in the queue
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
    //__________________________________________________________________________________________________________#

    // Find Minimum value

    min(root) {
        if (!root.left) {
            return root.value;
        }
        return this.min(root.left);
    }

    // Find maximum value

    max(root) {
        if (!root.right) {
            return root.value;
        }
        return this.max(root.right);
    }
    //______________________________________________________________________________________________________________

    //____   Closest value to a given value

    findClosestValue(root, target) {
        let currentNode = root;
        let closestValue = root.value;
        while (currentNode) {
            if (Math.abs(currentNode.value - target) < Math.abs(closestValue - target)) {
                closestValue = currentNode.value;
            }
            if (target < currentNode.value) {
                currentNode = currentNode.left;
            } else if (target > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                break;
            }
        }
        return closestValue;
    }
    //_______________________________________________________________________________________________________________

    // BST Deletion

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            // else there is a two child nodes then below code works
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    //_________________________________________________________________________________________________________________

    //BST Validation

    isBST(node) {
        if (node == null) return true;
        if (node.left != null && this.max(node.left) > node.value) return false;
        if (node.right != null && this.min(node.right) < node.value) return false;
        if (!this.isBST(node.left) || !this.isBST(node.right)) return false;
    }
    //__________________________________________________________________________________________________________________

}
const bst = new BinarySearchTree();
console.log('Tree is empty ? ', bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log('Tree is empty ? ', bst.isEmpty());

console.log('is there 10 in the tree ? ', bst.search(bst.root, 10));
console.log('is there 10 in the tree ? ', bst.search(bst.root, 20));
console.log('is there 10 in the tree ? ', bst.search(bst.root, 30));
console.log('is there 10 in the tree ? ', bst.search(bst.root, 50));

console.log('\npreOrder traversal:');
bst.preOrder(bst.root);

console.log('\ninOrder traversal:');
bst.inOrder(bst.root);

console.log('\npostOrder traversal:');
bst.postOrder(bst.root);

console.log('\nBFS');
bst.levelOrder();

console.log('\n Minimum value is : ', bst.min(bst.root));
console.log('\n maximum value is : ', bst.max(bst.root));

bst.insert(2);
console.log('\n Minimum value is : ', bst.min(bst.root));

console.log('\nClosest value : ');
console.log(bst.findClosestValue(bst.root, 8));

console.log('\nBefore Deletion :');
bst.levelOrder();
console.log('\nAfter Deletion :');
bst.delete(10);
bst.levelOrder();

console.log('\nValidating tree is BST : ');
console.log('BST ? ', bst.isBST());