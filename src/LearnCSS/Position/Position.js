/* 

The position property specifies the type of positioning method used for an element.

five different position values:

static
relative
fixed
absolute
sticky

Elements are then positioned using the top, bottom, left, and right properties. 
However, these properties will not work unless the position property is set first. 

position: static;
Static positioned elements are not affected by the top, bottom, left, and right properties.
An element with position: static; is not positioned in any special way; 
it is always positioned according to the normal flow of the page

position: relative;
An element with position: relative; is positioned relative to its normal position.

position: fixed;
An element with position: fixed; is positioned relative to the viewport, 
which means it always stays in the same place even if the page is scrolled.

position: absolute;
An element with position: absolute; is positioned relative to the nearest positioned ancestor.
However; if an absolute positioned element has no positioned ancestors, it uses the document body, 
and moves along with page scrolling.

position: sticky;
An element with position: sticky; is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. 
It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

*/