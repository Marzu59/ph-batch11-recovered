const products = [
    {id: 1, name: 'xiomi phone ', price: 36000},
    {id: 2, name: 'honor phone ', price: 26000},
    {id: 3, name: 'nokia phone ', price: 46000},
    {id: 4, name: 'n ', price: 46000},
    {id: 5, name: 'nok ', price: 46000},
    {id: 6, name: 'iPhone ', price: 76000}
]



function matchedProducts(products, search){

          let match = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product)
        }
        
    }
    return match;

}

const result = matchedProducts(products, 'Phone')
console.log(result)