/* eslint-disable no-undef */
/*
*This function creates and return array of node elements*
*It takes title of element, title of parent and array of information*
*Each element gets text content and class name from enter collection*
*/
export default function createElements(titleOfParent, titleOfElement, dataObject) {
  const keys = Object.keys(dataObject);
  const arrayOfNodes = keys.map((element) => {
    const nodeElement = document.createElement(titleOfElement);
    nodeElement.className = `${titleOfParent}__${titleOfElement}-${element}`;
    nodeElement.textContent = dataObject[element];
    return nodeElement;
  });
  return arrayOfNodes;
}
