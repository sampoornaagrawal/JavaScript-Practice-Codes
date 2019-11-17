// all primne numbers until a given value:
function isprime(num){
    const n=Math.ceil(num/2);
    for(let i=2;i<=n;i++){
        if(num%i===0) return 'false';
        else return 'true';
    }
}
let number=21;
for(let i=0;i<=number;i++){
    if(isprime(i)=='true') console.log(i);
}
