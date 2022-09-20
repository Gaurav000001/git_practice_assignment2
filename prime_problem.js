function checkPrime(number){
    let factor=0;
        for(let i=1;i<=num;i++){
            if(number%i==0){
                factor++
            }
    }

    if(factor == 2){
        return true;
    }
        return false;
}
let ans=checkPrime(178)
if(ans==true){
    console.log("number is prime");
}
else{
    console.log("number is not prime");
}