import chalk from "chalk";
import inquire from "inquirer";

class Player{
    name:string
    fuel:number=100

    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncease(){
        this.fuel = 100;
    }
}
class Opponent {
    name: string
    fuel: number = 100

    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquire.prompt({
    type:"input",
    name:"name",
    message:"Please Enter your name!"
})


let opponent = await inquire.prompt({
    type: "list",
    name: "select",
    message: "Please select an opponent",
    choices:["Skeleton","Assasin","Zombie"]
})


let p1 = new Player(player.name)
let o1 = new Player(opponent.select)

do {
    if (opponent.select == "Skeleton") {
        

        let ask = await inquire.prompt({
            type: "list",
            name: "option",
            message: "Please select an option",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        })

        if (ask.option == "Attack") {
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel <= 0){
                    console.log(chalk.bold.red.italic("You lose , hope better luck next time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncease()
            console.log(chalk.green.bold.italic(`You Drink Health Portion , Your Fuel is ${p1.fuel}`))
        }
        if (ask.option == "Run for your life..") {
            console.log(chalk.red.bold.italic("You lose , hope better luck next time"))
            process.exit()
        }
    }

    // for assassin

    if (opponent.select == "Assasin") {


        let ask = await inquire.prompt({
            type: "list",
            name: "option",
            message: "Please select an option",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        })

        if (ask.option == "Attack") {
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You lose , hope better luck next time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncease()
            console.log(chalk.green.bold.italic(`You Drink Health Portion , Your Fuel is ${p1.fuel}`))
        }
        if (ask.option == "Run for your life..") {
            console.log(chalk.red.bold.italic("You lose , hope better luck next time"))
            process.exit()
        }
    }

    // for zombie

    if (opponent.select == "Zombie") {


        let ask = await inquire.prompt({
            type: "list",
            name: "option",
            message: "Please select an option",
            choices: ["Attack", "Drink Portion", "Run for your life.."]
        })

        if (ask.option == "Attack") {
            console.log("Attack")
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                p1.fuelDecrease()
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`))
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You lose , hope better luck next time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuelDecrease()
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`))
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("You Win"))
                    process.exit()
                }
            }
        }
        if (ask.option == "Drink Portion") {
            p1.fuelIncease()
            console.log(chalk.green.bold.italic(`You Drink Health Portion , Your Fuel is ${p1.fuel}`))
        }
        if (ask.option == "Run for your life..") {
            console.log(chalk.red.bold.italic("You lose , hope better luck next time"))
            process.exit()
        }
    }
}
while(true)
