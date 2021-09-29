let family = {
    incomes:[1700],
    expenses:[120, 340, 90, 1000]
}


function sum(array) {
    let total = 0;
    for(value of array) {
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    let total = calculateIncomes - calculateExpenses

    let balanceText = 'negativo'

    if(total >= 0){
        balanceText = 'positivo'
    }
    console.log(`Seu saldo é ${balanceText}: saldo R$${total.toFixed(2)}`)
}


calculateBalance()