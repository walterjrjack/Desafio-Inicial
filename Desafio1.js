// classificador de nível de herói
let heroi = ["Digite_O_Nome_do_Heroi", 10002 ];
console.log("XP do Herói: " + heroi[1]);
console.log("Nome do Herói: "+ heroi[0]);

// ESTRUTURA CONDICIONAL
// Se XP for maior que 1000 E menor que 2001 --> executa a mensagem
// maior que 1000 engloba de 1001 e menor que 2001 restringe, então o intervalo passa a ser 1000<XP<2001 = [1001,2000]
// segue essa lógica até o último nível

if(heroi[1]<1000){
    console.log("O Herói de nome " + heroi[0] + " está no nível de FERRO");
}else{
    if(heroi[1] > 1000 && heroi[1] < 2001){
        console.log("O Herói de nome " + heroi[0] + " está no nível de BRONZE");
    }else{
        if(heroi[1] > 2000 && heroi[1] < 5001){
            console.log("O Herói de nome " + heroi[0] + " está no nível de PRATA OURO");
        }else{
            if(heroi[1] > 5000 && heroi[1] < 8001){
                console.log("O Herói de nome " + heroi[0] + " está no nível de PLATINA DIAMANTE"); 
            }else{
                if(heroi[1] > 8000 && heroi[1] < 9001){
                    console.log("O Herói de nome " + heroi[0] + " está no nível de ASCENDENTE");
                }else{
                    if(heroi[1] > 9000 && heroi[1] < 10001){
                        console.log("O Herói de nome " + heroi[0] + " está no nível de IMORTAL");
                    }else{
                        if(heroi[1] > 1000 ){
                            console.log("O Herói de nome " + heroi[0] + " está no nível de IMORTAL");
                        }
                    }
                }
            }
        }
    }
}