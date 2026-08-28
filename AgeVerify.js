const age = {}

//child
age.child=(age)=>{
    if(age<18){
        return "I dont like girls"
    }else{
        return "i like only my gf"
    }
}
age.elder=(age)=>{
    if (age>=18){
        return " yo majduri garna jaa"
    }else{
        return "tero kam xaina bhai"
    }
}

export default age