console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

let myFavoriteFood  = 'Maqlouba';
// make sure that the variable is in the global scope
const favoriteFood = function () {
    myFavoriteFood = 'Mansaf';
};
  
  favoriteFood(); // => the value of `myFavoriteFood` variable
  
