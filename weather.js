//Pulling classes from HTML page.

var button = document.querySelector('.button');
var results=document.querySelector('.results');
var city=document.querySelector('.city');
var description=document.querySelector('.description');
var temp=document.querySelector('.temp');
var time=document.querySelector('.time');
var icon=document.querySelector('.icon');
let apiKey = 'f5c71672d1aae94b50968e5701eb9f9f';

// Calling weathermap function for the zip code.

button.addEventListener('click',function()
		{
			var zipcode=document.querySelector('.zipcode').value
			fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=Imperial&appid=${apiKey}`)
			.then(response =>response.json())
			.then(data=>
					{
// Assigning retunred values from weather API to variables.

						var resultsval=data['results'];
						var nameval=data['name'];
						var descrval=data['weather'][0]['description'];
						var tempval=data['main']['temp'];
						var tempvalx=data['main']['temp_max'];
						var tempvaln=data['main']['temp_min'];
						var namehdval="City Name : ";
						var countryval=data['sys']['country'];
						var desctxtval="Weather Description : ";
						var tempdesc="Current temparature is : ";
						var timedesc="Current time for location is : ";
						var timezonev= data['timezone'];
						var timeval=moment().utcOffset(timezonev/60).format('YYYY-MM-DD h:mm A')
						var weatheric= data['weather'][0]['icon'];
						var weatherico= 'http://openweathermap.org/img/wn/'+ weatheric  +'@2x.png'
						console.log(tempval)
//Assigning values back to HTML page.

						city.innerHTML=namehdval + nameval +", "+countryval
						description.innerHTML=desctxtval + descrval
						temp.innerHTML= tempdesc + tempval + " F"
						time.innerHTML=timedesc + timeval
						icon.src=weatherico
					}
				)
		}
	)