// function isBalanced(root = null) {
//     let array = getHeight(root);
//     return array[0];
// }

// function getHeight(root = null) {
//     if (!root) return [true, 0];

//     let [leftBalanced, leftHeight] = getHeight(root.left);
//     let [rightBalanced, rightHeight] = getHeight(root.right);

//     let balanced =
//         leftBalanced &&
//         rightBalanced &&
//         Math.abs(rightHeight - leftHeight) <= 1;

//     return [balanced, 1 + Math.max(leftHeight, rightHeight)];
// }



function isBalanced(root = null) {
    const sol = getHeight(root);
    return sol[0];
}

const getHeight = (root = null) => {
    if(!root) return [true, 0];
    
    const [isLeftBalanced, leftHeight] = getHeight(root.left);
    const [isRightBalanced, rightHeight] = getHeight(root.right);
    const balanced = isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1

    return [balanced, 1+ Math.max(leftHeight, rightHeight)]
}









