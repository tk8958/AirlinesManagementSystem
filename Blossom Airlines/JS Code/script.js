

let today = new Date().toISOString().split('T')[0];
        document.getElementById("departureDate").setAttribute('min', today);

document.getElementById('flightSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fromCity = document.getElementById('fromCity').value.trim();
    const toCity = document.getElementById('toCity').value.trim();
    const departureDate = document.getElementById('departureDate').value;
 

    // Simulate flight search data
    const availableFlights = searchFlights(fromCity, toCity, departureDate);

    // Display the flight results
     displayFlights(availableFlights);
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    

   // alert(`Booking Confirmed!\nName: ${passengerName}\nEmail: ${passengerEmail}  \Flight: ${number}`);
    document.querySelector('.full-div').style.display ='none';
    document.querySelector('.your-ticket1').classList.remove("your-ticket1");
     const yourTicket= document.querySelector("#flightNo");
     const price=document.querySelector("#payment");
     const name1= document.querySelector("#name");
     const email1= document.querySelector("#email");
     const date1=document.querySelector("#date1");
     const place1=document.querySelector("#from");
     const place2=document.querySelector("#to");
     const class1=document.querySelector("#aeroplaneClassPage");

   
    
    const passengerEmail = document.getElementById('passengerEmail').value.trim();
    const number = document.getElementById('flightnumber').innerText;
   
    const name = document.getElementById('passengerName').value;
    const email = document.getElementById('passengerEmail').value;
    const date=document.querySelector("#departureDate").value;
    const place=document.querySelector("#fromCity").value;
    const place22=document.querySelector("#toCity").value;

    const price1=document.querySelector("#price").innerText;
    const class11=document.querySelector("#aeroplaneClass").value;


    price.innerHTML=`
       <p>${price1}</p>
    `;

    class1.innerHTML=`
       <p> Class: ${class11}</p>
    `;

     place1.innerHTML=`
           <p>${place}</p>
     `;

     place2.innerHTML=`
           <p>${place22}</p>
     `;

  
    
     yourTicket.innerHTML=`
                                    
                 <div> ${number}</div>
                 
    `;

       name1.innerHTML=`
         <p> Name : ${name}</p1>
    `;

     email1.innerHTML=`
         <p> Email : ${email}</p1>
    `;

    date1.innerHTML=`
    <p>Depature Date : ${date}</p1>
`;




});

function searchFlights(fromCity, toCity, departureDate) {
    // For simplicity, this example uses mock flight data.
    // In a real system, this data would be fetched from a server.
    
    const flights = [
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Mumbai', departureDate: departureDate, price: 'Rs.30000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Mumbai', departureDate: departureDate, price: 'Rs.25000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Mumbai', departureDate: departureDate, price: 'Rs.27000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Dehradun', departureDate: departureDate, price: 'Rs.15000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Dehradun', departureDate: departureDate, price: 'Rs.10000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Dehradun', departureDate: departureDate, price: 'Rs.8000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Bangalore', departureDate: departureDate, price: 'Rs.26000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Bangalore', departureDate: departureDate, price: 'Rs.27000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Bangalore', departureDate: departureDate, price: 'Rs.29000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Hyderabad', departureDate: departureDate, price: 'Rs.28000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Hyderabad', departureDate: departureDate, price: 'Rs.30000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Hyderabad', departureDate: departureDate, price: 'Rs.28000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Chandigarh', departureDate: departureDate, price: 'Rs.6000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Chandigarh', departureDate: departureDate, price: 'Rs.6000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Jaipur', departureDate: departureDate, price: 'Rs.10000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Jaipur', departureDate: departureDate, price: 'Rs.10000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Jaipur', departureDate: departureDate, price: 'Rs.11000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Bhubaneswar', departureDate: departureDate, price: 'Rs.12000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Bhubaneswar', departureDate: departureDate, price: 'Rs.13000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Chennai', departureDate: departureDate, price: 'Rs.26000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Chennai', departureDate: departureDate, price: 'Rs.27000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Surat', departureDate: departureDate, price: 'Rs.28000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Surat', departureDate: departureDate, price: 'Rs.29000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Surat', departureDate: departureDate, price: 'Rs.28000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Pune', departureDate: departureDate, price: 'Rs.19000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Pune', departureDate: departureDate, price: 'Rs.20000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Imphal', departureDate: departureDate, price: 'Rs.33000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Imphal', departureDate: departureDate, price: 'Rs.30000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Imphal', departureDate: departureDate, price: 'Rs.32000' },
        { flightNo: 'Vistarao', fromCity: 'Delhi', toCity: 'Bhopal', departureDate: departureDate, price: 'Rs.23000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Bhopal', departureDate: departureDate, price: 'Rs.21000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Amritsar', departureDate: departureDate, price: 'Rs.10000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Amritsar', departureDate: departureDate, price: 'Rs.9000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Amritsar', departureDate: departureDate, price: 'Rs.11000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Kannur', departureDate: departureDate, price: 'Rs.29000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Kannur', departureDate: departureDate, price: 'Rs.30000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Indore', departureDate: departureDate, price: 'Rs.16000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Indore', departureDate: departureDate, price: 'Rs.8000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Varanasi', departureDate: departureDate, price: 'Rs.30000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Varanasi', departureDate: departureDate, price: 'Rs.30000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Varanasi', departureDate: departureDate, price: 'Rs.6000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Jammu', departureDate: departureDate, price: 'Rs.8000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Jammu', departureDate: departureDate, price: 'Rs.8000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Jammu', departureDate: departureDate, price: 'Rs.9000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Adampur', departureDate: departureDate, price: 'Rs.15000' },
        { flightNo: 'Go Air', fromCity: 'Delhi', toCity: 'Adampur', departureDate: departureDate, price: 'Rs.14000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Bhuj', departureDate: departureDate, price: 'Rs.27000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Bhuj', departureDate: departureDate, price: 'Rs.23000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Agra', departureDate: departureDate, price: 'Rs.6000' },
        { flightNo: 'Air India', fromCity: 'Delhi', toCity: 'Agra', departureDate: departureDate, price: 'Rs.4000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Prayagraj', departureDate: departureDate, price: 'Rs.13000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Prayagraj', departureDate: departureDate, price: 'Rs.11000' },
        { flightNo: 'IndiGo', fromCity: 'Delhi', toCity: 'Bareilly', departureDate: departureDate, price: 'Rs.12000' },
        { flightNo: 'Vistara', fromCity: 'Delhi', toCity: 'Bareilly', departureDate: departureDate, price: 'Rs.10000' },
    ];

    return flights.filter(flight => {
        return flight.fromCity.toLowerCase() === fromCity.toLowerCase() &&
            flight.toCity.toLowerCase() === toCity.toLowerCase() &&
            flight.departureDate === departureDate;
    });
}

function displayFlights(flights) {
    const flightList = document.getElementById('flightList');
    flightList.innerHTML = ''; // Clear previous results

    if (flights.length === 0) {
        flightList.innerHTML = '<p>No flights found for your search.</p>';
    } else {
        flights.forEach(flight => {
            const flightDiv = document.createElement('div');
            flightDiv.classList.add('flight');
            flightDiv.innerHTML = `
                <h3 id="flightnumber" >Flight: ${flight.flightNo}</h3>
                <p id="place">From: ${flight.fromCity} To: ${flight.toCity}</p>
                <p>Departure Date: ${flight.departureDate}</p>
                <p id="price">Price: ${flight.price}</p>
                <a href="#bookingsec"><button onclick="selectFlight('${flight.flightNo}')">Book Now</button></a>
            `;
            flightList.appendChild(flightDiv);
        });
    }
}



function selectFlight(flightNo) {
    document.querySelector('.flight-results').style.display = 'none';
    document.querySelector('.booking-section').style.display = 'block';
    // alert(`You selected Flight ${flightNo}. Please enter your details to book.`);
}

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("passengerName", document.getElementById("passengerName").value);
    formData.append("passengerEmail", document.getElementById("passengerEmail").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("gender", document.getElementById("gender").value);
    formData.append("dob", document.getElementById("dob").value);
    formData.append("aadhaar", document.getElementById("aadhaar").files[0]);
    formData.append("cardName", document.getElementById("cardName").value);
    formData.append("cardNumber", document.getElementById("cardNumber").value);
    formData.append("expiry", document.getElementById("expiry").value);

    fetch("http://localhost:8080/api/auth/save", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
