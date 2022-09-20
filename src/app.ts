const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = "GOOGLE_API_KEY";

// type GoogleGeocodingResponse = {
//     results: { geometry: { location: { lat: number; lng: number } } }[];
//     status: "OK" | "ZERO_RESULTS";
// };

const searchAddressHandler = (event: Event) => {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    // send this to Google's API!
    fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
    ).then(response => { // <GoogleGeocodingResponse>
        if (response.status !== 200) {
            throw new Error('Failed!');
        }
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err.message);
    });


};

form.addEventListener('submit', searchAddressHandler);
