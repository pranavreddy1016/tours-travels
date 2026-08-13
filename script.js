
const masterBusFleet = [
    { from: "pune", to: "mumbai", name: "Platinum Cruise", type: "AC Sleeper", time: "05:30 AM", fare: 650 },
    { from: "pune", to: "latur", name: "Marathwada Express", type: "AC Sleeper", time: "09:30 PM", fare: 750 },
    { from: "pune", to: "nanded", name: "Hazur Sahib Travels", type: "Volvo AC", time: "08:45 PM", fare: 900 },
    { from: "pune", to: "nagpur", name: "Samruddhi Super", type: "AC Sleeper", time: "07:00 PM", fare: 1400 },
    { from: "pune", to: "nakhik", name: "Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    { from: "pune", to: "aurangabad", name: "Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    { from: "pune", to: "goa", name: "Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    { from: "pune", to: "akola", name: "Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    { from: "pune", to: "pharbani", name: "Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    { from: "pune", to: "amaravati", name: "Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 ,},
    
    { from: "mumbai", to: "pune", name: "Platinum Cruise", type: "AC Sleeper", time: "06:00 AM", fare: 650 },
    { from: "mumbai", to: "goa", name: "Konkan King", type: "AC Sleeper", time: "07:30 PM", fare: 1600 },
    { from: "mumbai", to: "aurangabad", name: "Gateway Express", type: "Volvo AC", time: "09:00 PM", fare: 700 },
    { from: "mumbai", to: "nanded", name: "Marathwada Express", type: "AC Sleeper", time: "08:00 PM", fare: 950 },
    { from: "mumbai", to: "nagpur", name: "Vidarbha Queen", type: "AC Sleeper", time: "07:30 PM", fare: 1450 },
    { from: "mumbai", to: "latur", name: "Sahyadri Express", type: "Non-AC Seater", time: "09:30 PM", fare: 500 },
    { from: "mumbai", to: "akola", name: "Godavari Link", type: "Non-AC Sleeper", time: "10:30 PM", fare: 700 },
    { from: "mumbai", to: "pharbani", name: "Coastal Cruise", type: "AC Sleeper", time: "11:00 PM", fare: 1200 },
    { from: "mumbai", to: "amaravati", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:30 PM", fare: 1150 },

    {from: "latur", to: "pune", name: "Marathwada Express", type: "AC Sleeper", time: "09:30 PM", fare: 750 },
    {from :"latur",to:"mumbai", name: "Sahyadri Express", type: "Non-AC Seater", time: "09:30 PM", fare: 500 },
    {from: "latur", to: "nanded", name: "Hazur Sahib Travels", type: "Volvo AC", time: "08:45 PM", fare: 900 },
    {from: "latur", to: "nagpur", name: "Samruddhi Super", type: "AC Sleeper", time: "07:00 PM", fare: 1400 },
    {from: "latur", to: "nakhik", name: "Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from: "latur", to: "aurangabad", name: "Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    {from: "latur", to: "goa", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "latur", to: "akola", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "latur", to: "pharbani", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "latur", to: "amaravati", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 ,},

    {from: "nanded", to: "pune", name: "Muze Hazur Sahib Travels", type: "Volvo AC", time: "08:45 PM", fare: 900 },
    {from: "nanded", to: "mumbai", name: "Muze Marathwada Express", type: "AC Sleeper", time: "08:00 PM", fare: 950 },
    {from: "nanded", to: "latur", name: "Muze Marathwada Express", type: "AC Sleeper", time: "09:30 PM", fare: 750 },
    {from: "nanded", to: "nagpur", name: "Muze Samruddhi Super", type: "AC Sleeper", time: "07:00 PM", fare: 1400 },
    {from: "nanded", to: "nakhik", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from: "nanded", to: "aurangabad", name: "Muze Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    {from: "nanded", to: "goa", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "nanded", to: "akola", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "nanded", to: "pharbani", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "nanded", to: "amaravati", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 ,},

    {from: "nagpur", to: "pune", name: "Muze Samruddhi Super", type: "AC Sleeper", time: "07:00 PM", fare: 1400 },
    {from: "nagpur", to: "mumbai", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "07:30 PM", fare: 1450 },
    {from: "nagpur", to: "latur", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "09:30 PM", fare: 500 },
    {from: "nagpur", to: "nanded", name: "Muze Marathwada Express", type: "AC Sleeper", time: "08:00 PM", fare: 950 },
    {from: "nagpur", to: "nakhik", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from: "nagpur", to: "aurangabad", name: "Muze Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    {from: "nagpur", to: "goa", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "nagpur", to: "akola", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "nagpur", to: "pharbani", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "nagpur", to: "amaravati", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 ,},
    
    {from: "nakhik", to: "pune", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from: "nakhik", to: "mumbai", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "09:30 PM", fare: 500 },
    {from: "nakhik", to: "latur", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "09:30 PM", fare: 500 },
    {from: "nakshik",to:"nanded", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from: "nakhik", to: "nagpur", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from:"nashik",to: "aurangabad", name: "Muze Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    {from: "nakhik", to: "goa", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "nakhik", to: "akola", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "nakhik", to: "pharbani", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "nakhik", to: "amaravati", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 ,},

    {from:"aurangabad", to: "pune", name: "Muze Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    {from:"aurangabad", to: "mumbai", name: "Muze Gateway Express", type: "Volvo AC", time: "09:00 PM", fare: 700 },
    {from: "aurangabad", to: "latur", name: "Muze Chhatrapati Travels", type: "Volvo AC", time: "02:15 PM", fare: 550 },
    {from: "aurangabad",to:"nanded",name: "Chhatrapati Nanded Express",type:"Slipper AC",time:"10:00 PM",fare:670},
    {from: "aurangabad", to: "nagpur", name: "Muze Samruddhi Super", type: "AC Sleeper", time: "07:00 PM", fare: 1400 },
    {from: "aurangabad", to: "nakhik", name: "Muze Sahyadri Express", type: "Non-AC Seater", time: "08:00 AM", fare: 450 },
    {from: "aurangabad", to: "goa", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "aurangabad", to: "akola", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "aurangabad", to: "pharbani", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "aurangabad", to: "amaravati", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 ,},

    {from: "goa", to: "pune", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "goa", to: "mumbai", name: "Muze Konkan King", type: "AC Sleeper", time: "07:30 PM", fare: 1600 },
    {from: "goa", to: "latur", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "goa", to: "nanded", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "goa", to: "nagpur", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from:"goa",to:"nakhik",name:"Muze Coastal Cruise",type:"AC Sleeper",time:"08:30 PM",fare:1500},
    {from: "goa", to: "aurangabad", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "goa", to: "akola", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from: "goa", to: "pharbani", name: "Muze Coastal Cruise", type: "AC Sleeper", time: "08:30 PM", fare: 1500 },
    {from:"goa",to:"amaravati",name:"Muze Coastal Cruise",type:"AC Sleeper",time:"08:30 PM",fare:1500},

    {from: "akola", to: "pune", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "akola",to: "nanded", name: "Muze Vidarbha Queen", type: "AC Sleeper",time: "10:00 PM",fare:"600"},
    {from: "akola", to: "mumbai", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:30 PM", fare: 700 },
    {from: "akola", to: "latur", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "akola", to: "nakhik", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "akola", to: "aurangabad", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "akola", to: "goa", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "akola", to: "pharbani", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    {from: "akola", to: "amaravati", name: "Muze Vidarbha Queen", type: "AC Sleeper", time: "09:00 PM", fare: 950 },
    
    {from: "pharbani", to: "pune", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "pharbani", to: "mumbai", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:30 PM", fare: 700 },
    {from: "pharbani", to: "latur", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "pharbani", to: "nanded", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from:"pharbani",to:"nagpur",name:"Muze Godavari Link",type:"Non-AC Sleeper",time:"10:00 PM",fare:600},
    {from:"pharbani",to:"nakhik",name:"Muze Godavari Link",type:"Non-AC Sleeper",time:"10:00 PM",fare:600},
    {from: "pharbani", to: "aurangabad", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "pharbani", to: "goa", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from: "pharbani", to: "akola", name: "Muze Godavari Link", type: "Non-AC Sleeper", time: "10:00 PM", fare: 600 },
    {from:"pharbani",to:"amaravati",name:"Muze Godavari Link",type:"Non-AC Sleeper",time:"10:00 PM",fare:600},

    {from: "amaravati", to: "pune", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from: "amaravati", to: "mumbai", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:30 PM", fare: 1150 },
    {from: "amaravati", to: "latur", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from: "amaravati", to: "nanded", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from: "amaravati", to: "nagpur", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from:"amaravati",to:"nakhik",name:"Muze Amba Travels",type:"AC Sleeper",time:"08:00 PM",fare:1100},
    {from: "amaravati", to: "aurangabad", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from: "amaravati", to: "goa", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from: "amaravati", to: "akola", name: "Muze Amba Travels", type: "AC Sleeper", time: "08:00 PM", fare: 1100 },
    {from:"amaravati",to:"pharbani",name:"Muze Amba Travels",type:"AC Sleeper",time:"08:00 PM",fare:1100},
]

// 2. HTML Elements Ko Select Karna
const sourceCity = document.getElementById('sourceCity');
const destCity = document.getElementById('destCity');
const findBusesBtn = document.getElementById('findBusesBtn');
const busListOutput = document.getElementById('busListOutput');



findBusesBtn.addEventListener('click', () => {
    const pickPoint = sourceCity.value.toLowerCase();
    const dropPoint = destCity.value.toLowerCase();

    // Validation: Agar kuch select nahi kiya
    if (pickPoint === dropPoint) {
        alert("Please select different Pickup and Drop points.");
        return;
    }

    
    const matchedBuses = masterBusFleet.filter(bus => bus.from === pickPoint && bus.to === dropPoint);

  
    busListOutput.innerHTML = "";

    if (matchedBuses.length === 0) {
        busListOutput.innerHTML = `<div class="no-buses">No buses found for this route.</div>`;
        return;
    }

    
    matchedBuses.forEach(bus => {
        const card = document.createElement('div');
        card.className = 'real-bus-card';
        card.innerHTML = `
            <div class="meta-section">
                <h4>${bus.name}</h4>
                <span class="pill-tag">${bus.type}</span>
            </div>
            <div class="schedule-section">
                <span><b>Time:</b> ${bus.time}</span>
            </div>
            <div class="inventory-section">
                <span class="fare-display">₹${bus.fare}</span>
                <a href="https://wa.me" target="_blank" class="instant-book-cta">Book Ticket</a>
            </div>
        `;
        busListOutput.appendChild(card);
    });
});






// const str="Ronnit";
// const str2="Pranav reddy";
// const str3="Pranav is Good";
// const day=18;
// // console.log(str);
// // console.log(str2);
// // console.log(str3);
// // console.log(day);

// // console.log(typeof(str));
// // console.log(typeof(str2));
// // console.log(typeof(str3));
// // console.log(typeof(day));

// // console.log(str.length);
// // console.log(str2.length);
// // console.log(str3.length);
// // console.log(day.length);

// // console.log(str.toUpperCase());
// // console.log(str2.toUpperCase());
// // console.log(str3.toUpperCase());

// // console.log(str.toLowerCase());
// // console.log(str2.toLowerCase());
// // console.log(str3.toLowerCase());


// // let name = prompt("Enter your name:");


// // const str3="Pranav is good person and he is learning javascript";
// // let b=console.log(str3.indexOf('a'));

// // if(b==-1){
// //     console.log("Your Index is not Present");
// // }
// // else{

// // console.log("Your index is find");
// // }

// // let c=console.log(str3.lastIndexOf('a'));

// // if(c==-1){
// //     console.log("Your Index is not Present");
// // }
// // else{

// // console.log("Your index is find");
// // }

// // console.log(str3.slice(-2));


// const arr=[10,20,40,50];
// // const arr2=[10,20,40,50,55,98];
// // // arr.push(56);
// // // console.log(arr);
// // const arr3=[...arr,...arr2]
// // console.log(arr3);

// const names=["Reddy","Chintu","Krish","Abhinav","Avinash"];
// // console.log(name.toString());
// console.log(typeof names.toString());
// console.log(typeof arr.toString());
