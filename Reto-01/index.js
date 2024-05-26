const giftIds = [2, 1, 3, 5, 3, 2]

function findFirstRepeated(gifts) {
    const repeatedId = new Set()

    for(const id of gifts){
        if(repeatedId.has(id))return id
        repeatedId.add(id)
    }
    return -1
}

findFirstRepeated(giftIds)