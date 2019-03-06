
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const dinosaurs = [

    {
        dinoType: 'Archaeopteryx'
    },
    {
        dinoType: 'Pterodactyl'
    },
    {
        dinoType: 'Megalodon'
    }
];

//loop over dinosaurs
//build up a domstring
//print domstring to the dom

const buildDinosaurs=()=>{
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
    }
    printToDom('dino-barn', domString);
};

const init =()=>{
    buildDinosaurs();

};
init();
