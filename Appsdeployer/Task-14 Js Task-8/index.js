var getDetails = document.getElementById('btn');
var textBox = document.getElementById('Text');

getDetails.addEventListener("click", () => {
    var Val = textBox.value;
    if (Val.length === 0) {
        alert("Please Provide a valid Country Name");
    }
    else {
        // var Val = 'Germany';
        // console.log("YEss");

        var URL = fetch(`https://restcountries.com/v3.1/name/${Val}?fullText=true`);
        URL.then((res) => {
            return res.json();
        }).then((object) => {
            document.querySelector('hr').style.display = "block";
            document.getElementById('info').style.display = 'block'
            document.getElementById('country-info').style.display = 'block'
            document.getElementById('img').src = `${object[0].flags.svg}`;
            document.getElementById('name').innerHTML = `${object[0].name.common}`;
            document.getElementById('Capital').innerHTML = `${object[0].capital[0]}`;
            document.getElementById('Continent').innerHTML = `${object[0].continents[0]}`;
            if (object[0].independent === true) {
                document.getElementById('Independent').innerHTML = "Yes";
            }
            else {
                document.getElementById('Independent').innerHTML = "No";
            }
            document.getElementById('Population').innerHTML = `${object[0].population}`;
            document.getElementById('Area').innerHTML = `${object[0].area}`;
            document.getElementById('Languages').innerHTML = `${Object.values(object[0].languages).toString().split(",").join(', ')}`;
        }).catch(() => {
            alert("Enter a valid Country");
            document.location.reload();
        });
    }
});