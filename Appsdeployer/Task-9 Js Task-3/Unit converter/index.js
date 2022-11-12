var Second = document.getElementById('second');
var Miliseconds = document.getElementById('miliseconds');


if(Second){
    Second.addEventListener('input', function(){
        let s = this.value;
        let mi = s * 1000;
        Miliseconds.value = mi;
    });
    
}
if(Miliseconds){
    Miliseconds.addEventListener('input', function(){
        let mi = this.value;
        let s = mi / 1000;
        if(!Number.isInteger(s)){
            s = s.toFixed(2);
        };
        Second.value = s;
    });
}

