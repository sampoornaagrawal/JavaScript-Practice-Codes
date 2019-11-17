function stars(limit){
    for(let i=1;i<=limit;i++){
        let pattern='';
        for(let j=0;j<i;j++)
            pattern+='*';

        console.log(pattern);
    }
}
stars(5)

// output:-
// *
// **
// ***
// ****
// *****
