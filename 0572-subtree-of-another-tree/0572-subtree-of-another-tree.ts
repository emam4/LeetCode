/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isSameTree(s: TreeNode | null, t: TreeNode | null): boolean {
    if (!s && !t) return true;
    if (s === null || t === null) return false;
    return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root === null) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}