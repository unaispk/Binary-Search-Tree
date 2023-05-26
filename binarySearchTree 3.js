class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
 
  function findClosestValue(node, target) {
    let closestValue = node.value;
    let currentNode = node;
 
    while (currentNode !== null) {
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
 
