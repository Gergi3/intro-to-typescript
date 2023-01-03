type Ticket = {
    [index: string]: string | number;
    destination: string,
    price: number,
    status: string
}

init(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
)
console.log('-----------------------------------------');
init(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|sold',
        'New York City|95.99|available',
        'Boston|126.20|departed'
    ],
    'status'
)

console.log('-----------------------------------------');
init(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|sold',
        'New York City|95.99|available',
        'Boston|126.20|departed'
    ],
    'price'
)

function init(argsArr: string[], sortCriteria: string) {
    let tickets : Ticket[] = [];
    argsArr.forEach((x) => {
        let args : string[] = x.split('|');

        tickets.push({
            destination: args[0],
            price: +args[1],
            status: args[2]
        })
    });

    tickets.sort((a, b) => {
        let aVal = a[sortCriteria]; 
        let bVal = b[sortCriteria]
        if (typeof aVal == 'number' && typeof bVal == 'number') {
            if (aVal > bVal) {
                return 1;
            } else if (aVal < bVal) {
                return -1;
            }
            return 0;
        } else if (typeof aVal == 'string' && typeof bVal == 'string') {
            return aVal.localeCompare(bVal);
        } else {
            return 0;
        }
    })

    console.log(tickets);
    return;
}