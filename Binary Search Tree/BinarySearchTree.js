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
        }  
        //  tree has value, Then ;
        if (root.value === value) {
            return true;
        } else if (value < root.value) {   //   value is lesser than root
            return this.search(root.left, value); //recursion. now root.left act as root
        } else { //  value is greater than root
            return this.search(root.right, value); //recursion. now root.right act as root
        }

    }//_____________________________________________________________________________________________________

    //TRAVERSAL

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
    findClosestValue(root, target) {
        let closestValue = root.value;
        let currentNode = root;

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
    //_________________________________________________________________________________________________________
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
console.log('is there 20 in the tree ? ', bst.search(bst.root, 20));
console.log('is there 3 in the tree ? ', bst.search(bst.root, 3));
console.log('is there 50 in the tree ? ', bst.search(bst.root, 50));

console.log('\npreOrder traversal:');
bst.preOrder(bst.root);

console.log('\ninOrder traversal:');
bst.inOrder(bst.root);

console.log('\npostOrder traversal:');
bst.postOrder(bst.root);

console.log('\nclosest value');
console.log(bst.findClosestValue(bst.root, 11));