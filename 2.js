
function getFruitColor(fruit) {
    switch (fruit) {
        case 'banana':
            console.log("Yellow");
            break;
        case 'pineapple':
            console.log("Orange");
            break;
        case 'apple':
            console.log("Green");
            break;
        default:
            console.log("Unknown fruit");
            break;
    }
}


getFruitColor('banana');    
getFruitColor('pineapple'); 
getFruitColor('apple');     
