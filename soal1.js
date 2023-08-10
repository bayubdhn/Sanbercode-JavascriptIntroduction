const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function readInput(){
    rl.question(`Input value number ? `, number => {
        if(number < 0){
            const dataReturn = {
                'status': 400,
                'message': 'Tidak bisa input bilangan negatif'
            }

            console.log(dataReturn);
            readInput();
        }else if((number % 2) != 0){
            const dataReturn = {
                'status': 400,
                'message': 'Tidak bisa input bilangan ganjil'
            }

            console.log(dataReturn);
            readInput();
        }else{
            const bil = Math.sqrt(number);
            const dataReturn = {
                'status': 200,
                'data': {
                    'bilangan': bil
                }
            }

            console.log(dataReturn);
            rl.close();
        }
    });
}

readInput();