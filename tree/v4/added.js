// Expand full tree on button press.
// function expandTree()
// {
//     tree().chart.root.children.forEach(expand);
//
//     root.children.forEach(expand);
//     update(root);
//
//     function expand(d) {
//         if (d._children)
//         {
//             d.children = d._children;
//             d.children.forEach(expand);
//             d._children = null;
//         }
//     }
//
// };
//
// // Collapse full tree on button press.
// function collapseTree()
// {
//     root.children.forEach(collapse);
//     update(root);
//
//     function collapse(d)
//     {
//         if (d.children)
//         {
//             d._children = d.children;
//             d._children.forEach(collapse);
//             d.children = null;
//         }
//     }
// };