const birinchiraqam = +prompt("1-raqamni kiriting:");
const kalkulator = prompt("Tanlang: \n 1) + \n 2) - \n 3) * \n 4) %");
const ikkinchiraqam = +prompt("2-raqamni kiriting:");


if (!birinchiraqam && birinchiraqam !== 0) {
  alert("Iltimos, 1-raqamga son kiriting.");
} else if (isNaN(birinchiraqam)) {
  alert("1-raqamga son kiriting, matn emas.");
} else if (!kalkulator) {
  alert("Iltimos, amal tanlang.");
} else if (!["1", "2", "3", "4"].includes(kalkulator)) {
  alert("Faqat 1 dan 4 gacha bo‘lgan raqamni tanlang.");
} else if (!ikkinchiraqam && ikkinchiraqam !== 0) {
  alert("Iltimos, 2-raqamga son kiriting.");
} else if (isNaN(ikkinchiraqam)) {
  alert("2-raqamga son kiriting, matn emas.");
} else {
  let natija;
  let amal;

  if (kalkulator == "1") {
    natija = birinchiraqam + ikkinchiraqam; 
    amal = "+";
  } else if (kalkulator == "2") {
    natija = birinchiraqam - ikkinchiraqam;
    amal = "-";
  } else if (kalkulator == "3") {
    natija = birinchiraqam * ikkinchiraqam;
    amal = "*";
  } else if (kalkulator == "4") {
    natija = birinchiraqam % ikkinchiraqam;
    amal = "%";
  }

  alert(`Javob: ${natija}`);

  const newTag = document.createElement("h1");
  newTag.textContent = `${birinchiraqam} ${amal} ${ikkinchiraqam} = ${natija}`;
  

  newTag.style.backgroundColor = "red";
  newTag.style.color = "white";
  newTag.style.padding = "20px";
  newTag.style.textAlign = "center";
  newTag.style.borderRadius = "10px";
  newTag.style.width = "fit-content";
  newTag.style.margin = "20px auto";
  newTag.style.fontFamily = "Arial";
  newTag.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  
  document.body.appendChild(newTag);
}


