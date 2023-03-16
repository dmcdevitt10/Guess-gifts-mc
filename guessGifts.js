let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

function guessGifts(list, gifts){
    possibleGifts = []
    list.forEach(elem => {
        for(let i = 0; i < gifts.length; i++){
            if (elem.size === gifts[i].size && elem.clatters === gifts[i].clatters && elem.weight === gifts[i].weight) {
                possibleGifts.push(elem.name)
            }
        }
    });
    return possibleGifts
}
    


console.log(guessGifts(wishlist, presents))
