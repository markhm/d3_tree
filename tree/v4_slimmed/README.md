Combining various examples into a generic, v4-based environment to explore and visualise tree data, just like <a href="https://www.youtube.com/watch?v=DYXWq5baRDA">I've built in Java</a> based on <a href="prefuse.org">http://prefuse.org</a>. It is better to open this block in a <a href="https://bl.ocks.org/markhm/raw/bf97e7229eabd1e5715eef0873fb6f8d">separate screen<a>. 

Based on examples from:
- Michael Hall - <a href="https://bl.ocks.org/mbhall88/126b3c2c54215b4d1ffbd2d778ce3973">Collapsible tree in reusable format using D3 v4</a>.
- Jake Zieve - <a href="https://bl.ocks.org/jjzieve/a743242f46321491a950">Search Collapsible Tree</a>.

Contributions from:
- <a href="https://github.com/gitsome">John David Martin</a> - Moved the Node Info block to the upper right.   

Many thanks to all involved.

Known issues:
- ~~Node Info box on the right claims horizontal space, despite that it floats. Should be aligned to top.~~
- The block does not really fit in the frame provided.  
- Seach results do not unfold. It seems the path object (in line 118) is created based on a root object that has not yet been processed by the tree algorithm.
- Node height slider not yet connected, seems unclear where. Needs tweaking based on the the overall container constraints? Could use Fisheye effect, as shown <a href="https://www.youtube.com/watch?v=C2HlrfHvStM">here</a>. 
- Nodes do not expand from themselves, which makes the transition suboptimal. Mike's <a href="https://bl.ocks.org/mbostock/4339083">v3 example</a> is more convincing.
- Wheel-scroll down (dragging with two fingers down on macOS) zooms out, rather than in. I would like to reverse this to align with the prefuse.org default. 
- Axes implementation (appendAxes() function) needs to be shown in the tree svg, rather than be added in a separate svg (when turned on). <a href="https://bl.ocks.org/mbostock/6123708">This example</a> will be helpful, as well as <a href="https://bl.ocks.org/mbostock/db6b4335bf1662b413e7968910104f0f">this one</a>.
- Vertical space between nodes is not large enough and should be based on the size of the dataset. <a href="https://javascript.tutorialhorizon.com/2014/09/15/render-a-d3-tree-with-a-minimum-distance-between-the-tree-nodes/">This example</a> provides help. 

Feature backlog:
- ~~CSS styles to be fixed, fonts to be aligned.~~
- Programmatic panning/zooming via button or double click to resize to fit to the visible tree. <a href="https://bl.ocks.org/iamkevinv/0a24e9126cd2fa6b283c6f2d774b69a2">This example</a> is relevant. <a href="http://bl.ocks.org/TWiStErRob/b1c62730e01fe33baa2dea0d0aa29359">This one</a> might be. Another example: <a href="https://bl.ocks.org/mbostock/3828981">van Wijk Smooth Zooming</a> 
- Focus nodes, or being able to select multiple nodes.
- Breadcrumb at the top for current focus node, just like in <a href="https://bumbeishvili.github.io/visuals/visuals/gallery/9.gif">this example</a> from <a href="https://github.com/bumbeishvili">David Bumbeishvili</a>.
- List/dropdown showing all node properties, allowing for easy selection and filtering.
- Collapsing the visible tree to a subtree based on e.g. property values, search criteria.
- Coloring tree nodes by property criteria. <a href="https://jsfiddle.net/mdml/vm56cgz1/">Example</a> 
- Vertical/horizontal reference lines to support axes, e.g. at 200, 400, 600, 800 px.  
- Programmatically set initial width based on getComputedTextLength() as in <a href="http://jsfiddle.net/henbox/jzkj29nv/27/">this example</a>.
- Ability to translate from left-right tree to top-bottom tree via button.
- Degree Of Interest Fisheye Filter, just like in prefuse.org, prefuse.action.filter.FisheyeTreeFilter.

Other relevant examples:
- <a href="https://bl.ocks.org/mbostock/3680957">SVG Semantic zooming</a> (v4) vs <a href="https://bl.ocks.org/mbostock/3680999">SVG Geometric Zooming</a> (v4)
- <a href="https://bl.ocks.org/mbostock/b783fbb2e673561d214e09c7fb5cedee">Zoom Transitions</a> (v4)  

Feedback is appreciated via markhm at gmail dot com or @markhm. 