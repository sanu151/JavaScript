var headingdiv = document.querySelector('#headingDiv');
headingdiv.querySelector('h1').innerHTML = 'DOM Traversing and Maipulating';
var mypara = headingdiv.children[1];
mypara.innerHTML = "DOM (Document Object Model) traversing and manipulation in JavaScript involve navigating the structure of an HTML document and making changes to its elements.";

var detailpara = document.querySelector('#detailPara');
detailpara.innerHTML = "DOM (Document Object Model) traversing and manipulation in JavaScript involve interacting with the structure of an HTML document. Traversing the DOM means navigating through its nodes, such as moving between parent and child elements or sibling nodes. This is commonly achieved using properties like parentNode, childNodes, children, nextSibling, and previousSibling. Selecting specific elements can be done through methods like getElementById, getElementsByClassName, getElementsByTagName, and more modern alternatives like querySelector and querySelectorAll, which use CSS-style selectors.";

var deataildiv = detailpara.parentElement;
deataildiv.style.border = '2px solid red';
deataildiv.style.padding = '5px 15px';

var listdetail = document.querySelector('li');
listdetail.innerHTML = 'Downwords : querySelecter, children';
var parentTag = listdetail.parentElement
parentTag.style.color = 'brown';
listdetail.nextElementSibling.innerHTML = 'Upwords : parentElement';
parentTag.children[2].innerHTML = 'Sidewise : nextElementSibling, previousElementSibling';
parentTag.children[2].previousElementSibling.style.color = 'blue';
