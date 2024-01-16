
// CALCULADORA DE NÍVEL DE HERÓI


function CalculatorOFSaldo( Victories, Defeat ) {
        
        VminusD = Victories - Defeat ;
        return VminusD;
}

let Saldo = CalculatorOFSaldo( 500, 1000);

if(Saldo<0){
    console.log("O Herói não possui saldo positivo ! Não há nível correspondente !");
}

if(Saldo < 10 && Saldo >0){
    console.log("O Herói tem de saldo de "+ Saldo +" está no nível de FERRO");
}else{
    if(Saldo > 10 && Saldo < 21){
        console.log("O Herói tem de saldo de "+ Saldo +" está no nível de BRONZE");
    }else{
        if(Saldo > 20 && Saldo < 51){
            console.log("O Herói tem de saldo de "+ Saldo +" está no nível de PRATA");
        }else{
            if(Saldo > 50 && Saldo < 81){
                console.log("O Herói tem de saldo de "+ Saldo +" está no nível de OURO"); //OURO
            }else{
                if(Saldo > 80 && Saldo < 91){
                    console.log("O Herói tem de saldo de "+ Saldo +" está no nível de DIAMANTE");//DIAMANTE
                }else{
                    if(Saldo > 90 && Saldo < 101){
                        console.log("O Herói tem de saldo de "+ Saldo +" está no nível de LENDÁRIO");//LENDÁRIO
                    }else{
                        if(Saldo > 100 ){
                            console.log("O Herói tem de saldo de "+ Saldo +" está no nível de IMORTAL");//IMORTAL
                        }
                    }
                }
            }
        }
    }
}
