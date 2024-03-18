function store(stock,order){
    let stockArr = [];
    for ( let i=0; i < stock.length; i+=2){
        let productStock = stock[i];
        let productQty = Number(stock[i+1]);
        let prodObj = { name:productStock, qty:productQty};
        stockArr.push(prodObj);
    }
    for ( let i=0; i < order.length; i+=2){
        let productOrder = order[i];
        let orderQty = Number(order[i+1]);
        let foundProd = stockArr.find((product) => product.name === productOrder);
        
        if ( foundProd){
            foundProd.qty += orderQty;
        }else{
            let orderObj = { name:productOrder, qty:orderQty};
        stockArr.push(orderObj);
        } 
    }
    for ( let prodObj of stockArr){
        console.log(`${prodObj.name} -> ${prodObj.qty}`);
    }
    
    
    }
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);