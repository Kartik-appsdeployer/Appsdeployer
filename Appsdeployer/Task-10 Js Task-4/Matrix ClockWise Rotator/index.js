let Button = document.querySelector('button');
Button.addEventListener('click', () =>{
        let One = Number(document.querySelector('#one').innerText);
        let Two = Number(document.querySelector('#two').innerText);
        let Three = Number(document.querySelector('#three').innerText);
        let Four = Number(document.querySelector('#four').innerText);
        let Six = Number(document.querySelector('#six').innerText);
        let Seven = Number(document.querySelector('#seven').innerText);
        let Eight = Number(document.querySelector('#eight').innerText);
        let Nine = Number(document.querySelector('#nine').innerText);

        

        document.getElementById('one').innerHTML = Four;
        document.getElementById('two').innerHTML = One;
        document.getElementById('three').innerHTML = Two;
        document.getElementById('four').innerHTML = Seven;
        document.getElementById('six').innerHTML = Three;
        document.getElementById('seven').innerHTML = Eight;
        document.getElementById('eight').innerHTML = Nine;
        document.getElementById('nine').innerHTML = Six;
});