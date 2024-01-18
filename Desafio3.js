

// begin the class, and the name, age and type.
class Game {   
            
        constructor(name, age, type){
                this.name = name
                this.age = age
                this.type = type
            }

// here, just messagens based on the type of character
        atack(){
            if(this.type === "mago"){
                console.log(`o ${this.type} atacou usando magia !`) 
                }else if(this.type === "guerreiro"){
                    console.log(`o ${this.type} atacou usando a espada !`)
                    } else if(this.type === "monge"){
                        console.log(`o ${this.type} atacou usando as artes marciais !`)
                        } else if(this.type === "ninja"){
                            console.log(`o ${this.type} atacou usando o  shuriken !`)
                        }
        }

}
// the association of class and print on the console
let NewGame = new Game("Joao", 12, "mago")
NewGame.atack()
