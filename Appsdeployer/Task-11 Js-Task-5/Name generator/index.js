function GenerateName(){
    document.getElementById('name1').innerHTML = "";
    document.getElementById('name2').innerHTML = "";
    document.getElementById('name3').innerHTML = "";
    document.getElementById('name4').innerHTML = "";
    document.getElementById('name5').innerHTML = "";
    const Dict = {'A': ['Aman', 'Ayush', 'Ajay', 'Ashish', 'Ashwini', 'Amar', 'Akshat', 'Anil'],
                  'B': ['Bhuvan', 'Balram', 'Bagmati', 'BalKrishna', 'Bajrang', 'Baman', 'Basant', 'Bimlesh'],
                  'C': ['Chitresh', 'Chitransh', 'Chirag', 'Chaitanya', 'Caleb', 'Cade', 'Cameron', 'Carter'],
                  'D': ['Daksh', 'Dhiru', 'Dhruv', 'Dinesh', 'Daman', 'Dakota', 'Dale', 'Daniel'],
                  'E': ['Ekansh', 'Elish', 'Earl', 'Eva', 'Emma', 'Eshan', 'Ethan', 'Ezra'],
                  'F': ['Faizan', 'Fabio', 'Farah', 'Faisal', 'Farhan', 'Francis', 'Fanish', 'Faiz'],
                  'G': ['Gagan', 'Ganga', 'Gael', 'Gabe', 'Gopal', 'Gorakh', 'Gabby', 'Gulshan'],
                  'H': ['Harshal', 'Harsh', 'Hemraj', 'Hans', 'Hardik', 'Hari', 'Harry', 'Harish'],
                  'I': ['Issac', 'Idris', 'Ian', 'Ivy', 'Isha', 'Ishan', 'Isaih', 'Ivan'],
                  'J': ['Jay', 'Janvant', 'Jayesh', 'Jordan', 'Jacob', 'Jagan', 'Jyoti', 'Jodha'],
                  'K': ['Kartik', 'Kamal', 'Kishor', 'Kaden', 'Kal', 'Kabir', 'Kiran', 'Kadam'],
                  'L': ['Lakshya', 'Lalit', 'Lokesh', 'Landry', 'Leon', 'Lakshman', 'Levi'],
                  'M': ['Mohan', 'Manoj', 'Maruti', 'Mena', 'Megha', 'Mehek', 'Magan', 'Madan'],
                  'N': ['Neeraj', 'Neeti', 'Nitin', 'Naman', 'Nihal' ,'Neel', 'Nakul', 'Neil'],
                  'O': ['Omar', 'Om', 'Orion', 'Ojas', 'Ohas', 'Oma', 'Obalesh', 'Ojal'],
                  'P': ['Pankaj', 'Poornima', 'Payal', 'Pawan', 'Pooja', 'Pushpa', 'Pitambar', 'Piyush'],
                  'Q': ['Quinn', 'Qamar', 'Quentin', 'Qutab', 'Qadir', 'Quin', 'Quinian' , 'Quiana'],
                  'R': ['Rahul', 'Ram', 'Radhe', 'Raj', 'Raghu', 'Raghav', 'Raman', 'Rituraj', 'Rajesh'],
                  'S': ['Swati', 'Shikha', 'Somesh', 'Srujal', 'Sandesh', 'Sajan', 'Sita', 'Sam'],
                  'T': ['Tanmay', 'Tanay', 'Tulesh', 'Tanish', 'Tanishka', 'Tanya', 'Tara', 'Tarun', 'Taran'],
                  'U': ['Uma', 'Udit', 'Udeep', 'Udaya', 'Udan', 'Udyaan', 'Umang', 'Uttam', 'Uddhav'],
                  'V': ['Veer', 'Vayu', 'Vachan', 'Vahin', 'Varun', 'Veda', 'Victor', 'Vaibhav'],
                  'W': ['Wade', 'William', 'Walter', 'Wallace', 'Walker', 'Wesley', 'Willow'],
                  'X': ['Xavier', 'Xander', 'Xerxes', 'Xena', 'Xolani', 'Xenia', 'Xaviera', 'Xiomara'],
                  'Y': ['Yash', 'Yajat', 'Yagya', 'Yamir', 'Yara', 'Yahvi', 'Yanni', 'Yatin'], 
                  'Z': ['Zain', 'Zia', 'Zachary', 'Zahara', 'Zora', 'Zacharias', 'Zahir', 'Zack']};
    var Name = document.getElementById('Char').value.toUpperCase();

    // One method for result as well as for the random elements

    // const Value = Dict[Name];
    // let res = [];
    // function getRandom(list){
    //     res = [];
    //     for(let i = 1; i <= 5; i++){
    //         const randm = Math.floor(Math.random() * list.length);
    //         res.push(list[randm]);
    //     }
    // }
    // getRandom(Value);

    
    // Second method for result

    const res = Object.fromEntries(Object.entries(Dict).filter(([value]) => value.includes(Name)));
    const Key = Object.keys(res)[0];
    const Val = Dict[Key];
    let arr = [];
    function getRandom(list){
        arr = [];
        for(let i = 1; i <= 5; i++){
            const randm = Math.floor(Math.random() * list.length);
            arr.push(list[randm]);
        }
    }
    getRandom(Val);
    document.getElementById('name1').innerHTML = arr[0];
    document.getElementById('name2').innerHTML = arr[1];
    document.getElementById('name3').innerHTML = arr[2];
    document.getElementById('name4').innerHTML = arr[3];
    document.getElementById('name5').innerHTML = arr[4];
    

    // Third method for the random elements

    // function getMultipleRandom(arr, num) {
    //     const shuffled = [...arr].sort(() => 0.5 - Math.random());
    
    //     return shuffled.slice(0, num);
    // }
    // const Val = getMultipleRandom(res, 5);
    // document.getElementById('name1').innerHTML = Val[0];
    // document.getElementById('name2').innerHTML = Val[1];
    // document.getElementById('name3').innerHTML = Val[2];
    // document.getElementById('name4').innerHTML = Val[3];
    // document.getElementById('name5').innerHTML = Val[4];
}