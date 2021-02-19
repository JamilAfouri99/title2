class phone{
    constructor(price,color){
        this.price=price;
        this.color=color;
    }
    sayHello(){
        return `Welcome in your home dear`;
    }
}

class Admin extends phone{
    constructor(price,color){
        super(price.color);
    }
    sayBye(){
        return `Bye man, hope to see you again soon `;
    }
}

let admin1=new dmin(1500,"white");
let admin2=new phone(1300,"black");
console.log(admin1.sayHello());
console.log(admin1.sayBye());
console.log(admin1.price);
console.log(admin2.price);