
// let returnedValue = mySplice([10, 20, 30, 40, 50, 60], 2, 3, 'apples');
//  expect(returnedValue).toEqual([30, 40, 50]);
function mySplice(arr, startIdx = 0, elemToRemove, elemToAdd) {

  // arr = ([10, 20, 30, 40, 50, 60],
  // strIdx = 2
  // elemsToRemove = 3
  // elemToAdd = 'apples'

  // arr at the the end =>  [10, 20, 'apples', 60]
  // before start idx there are some values I want to keep

  // removed => [30, 40, 50] ++ YAY US

  // beforeStrIdx => [10, 20] -- :)
  // elemToAdd = 'apples'
  // afterRemoved => [60] -- :)

  // remove all element from arr
  // arr => []

  // start pushing elements onto arr
  // arr => [10, 20, 60]

  let removedArr = [];
  // all the element I want to remove
  for (let i = startIdx; i < startIdx + elemToRemove; i++) {
    let currElem = arr[i];
    removedArr.push(currElem);
  }

  let beforeStrtElems = [];
  // elements before I start removing that I want to keep
  for (let i = 0; i < startIdx; i++) {
    let currElem = arr[i];
    beforeStrtElems.push(currElem);
  }


  let afterRemoveElems = [];
  for (let i = startIdx + elemToRemove; i < arr.length; i++) {
    let currElem = arr[i];
    afterRemoveElems.push(currElem);
  }

  while (arr.length) {
    arr.pop();
  }
  // arr => []
  for (let i = 0; i < beforeStrtElems.length; i++) {
    let currElem = beforeStrtElems[i];
    arr.push(currElem);
  }
  // arr => [10, 20]
  if (elemToAdd) {
    arr.push(elemToAdd);
  }
  // arr => [10, 20, 'apples']
  for (let i = 0; i < afterRemoveElems.length; i++) {
    let currElem = afterRemoveElems[i];
    arr.push(currElem);
  }
  // arr => [10,20,'apples', 60]

  return removedArr;
}