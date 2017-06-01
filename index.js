function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
   return document.querySelector('#nested .target');
 }

 function deepestChild() {
   let list = document.getElementById('grand-node').querySelectorAll('div');
   return list[list.length-1];
 }

 function increaseRankBy(n) {
   const rankedLists = document.querySelectorAll('.ranked-list')

   for (var i = 0, l = rankedLists.length; i < l; i++) {
     var children = rankedLists[i].children

     for (var j = 0, k = children.length; j < k; j++) {
       children[j].innerHTML = parseInt(children[j].innerHTML) + n
     }
   }
  }
