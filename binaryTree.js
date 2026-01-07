/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)   
    this.right = (right===undefined ? null : right)
}

var isSameTree = function(p, q) {
    if (!p && !q) return true; //Always check the node if it is null or not
    
    if (!p || !q) return false;
    
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


binaryTree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3)); //Input the correct data type
binaryTree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

result = isSameTree(binaryTree1, binaryTree2)
console.log(result)