countries = [
	{"United States" : "US"},
	{"Canada" : "CA"}
];

states = {
	"US" : [{"Alabama":"AL"},{"Alaska":"AK"},{"Arizona":"AZ"},{"Arkansas":"AR"},{"California":"CA"},{"Colorado":"CO"},{"Connecticut":"CT"},{"Delaware":"DE"},{"Florida":"FL"},{"Georgia":"GA"},{"Hawaii":"HI"},{"Idaho":"ID"},{"Illinois":"IL"},{"Indiana":"IN"},{"Iowa":"IA"},{"Kansas":"KS"},{"Kentucky":"KY"},{"Louisiana":"LA"},{"Maine":"ME"},{"Maryland":"MD"},{"Massachusetts":"MA"},{"Michigan":"MI"},{"Minnesota":"MN"},{"Mississippi":"MS"},{"Missouri":"MO"},{"Montana":"MT"},{"Nebraska":"NE"},{"Nevada":"NV"},{"New Hampshire":"NH"},{"New Jersey":"NJ"},{"New Mexico":"NM"},{"New York":"NY"},{"North Carolina":"NC"},{"North Dakota":"ND"},{"Ohio":"OH"},{"Oklahoma":"OK"},{"Oregon":"OR"},{"Pennsylvania":"PA"},{"Rhode Island":"RI"},{"South Carolina":"SC"},{"South Dakota":"SD"},{"Tennessee":"TN"},{"Texas":"TX"},{"Utah":"UT"},{"Vermont":"VT"},{"Virginia":"VA"},{"Washington":"WA"},{"West Virginia":"WV"},{"Wisconsin":"WI"},{"Wyoming":"WY"}
	],
	"CA": [{"Alberta":"AB"},{"British Columbia":"BC"},{"Manitoba":"MB"},{"New Brunswick":"NB"},{"Newfoundland and Labrador":"NL"},{"Nova Scotia":"NS"},{"Ontario":"ON"},{"Prince Edward Island":"PE"},{"Quebec":"QC"},{"Saskatchewan":"SK"},{"Yukon":"YT"},{"Nunavut":"NU"},{"Northwest Territories":"NT"}
	]
};
function populateCountry(countryId){
	var select = document.getElementById(countryId);
	select.length = 0;
	select.options[0] = new Option('Select Country','');
	select.selectedIndex = 0;

	for (var i = 0; i < countries.length; i++) {
		select.options[select.length] = new Option(Object.keys(countries[i]).pop(), Object.values(countries[i]).pop());
	}
}

function populateState(countryId, stateId){
	var select = document.getElementById(stateId);
	select.length = 0;
	select.selectedIndex = 0;
	
	var selectedCountry = document.getElementById(countryId).value;
	if(selectedCountry == '') {
		return;
	}
	
	select.options[0] = new Option('Select State / Province','');
	
	for (var i = 0; i < states[selectedCountry].length; i++) {
		select.options[select.length] = new Option(Object.keys(states[selectedCountry][i]).pop(), Object.values(states[selectedCountry][i]).pop());
	}
}
