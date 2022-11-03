// //Imagine you have two arrays, the first is a shopping list =
// [ ‘eggs’, ‘milk’, ‘wine’, ‘bread’, ‘crackers’ ]
// The second list is what you actually have in your shopping cart =
// [‘’chips, ’candy’, ’milk’, ’crackers’]
// Create a new array that contains all items in shopping list that are not in cart

// const shoppingList =  [ "eggs","milk", "wine", "bread", "crackers" ]
// const shoppingCart = [ 'chips','candy','milk','crackers']

// const manyShopping =[...shoppingList,...shoppingCart]

// console.log(manyShopping)

// // function missingItems(list,cart) {
// //     const missing =list.filter(item => !cart.includes(item))
// //     return missing
// }

function hybrid(list,cart){
    let newList =[]
    for(let i =0; i < list.length; i++) { //loop through list 
        if(!cart.includes(list[i])) {
            newList.push(list[i])
        }

    }
}