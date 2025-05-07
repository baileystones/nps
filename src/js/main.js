import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

//Template function
function parkInfoTemplate(info){
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}
//Data in disclaimer section
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName
//Site title update
document.querySelector("head > title").textContent = parkData.fullName;
//Banner image
document.querySelector(".hero-banner > img").src = parkData.images[0].url;
//Rest of park data
document.querySelector(".hero-banner__content").innerHTML = 
    parkInfoTemplate(parkData);