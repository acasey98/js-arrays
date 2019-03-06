
const printToDom = (divId, textToPrint) => 
{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const dinosaurs = 
[

    {
        dinoType: 'Archaeopteryx',
        name: 'Malcolm'
    },
    {
        dinoType: 'Pterodactyl',
        name: 'Reese'
    },
    {
        dinoType: 'Megalodon',
        name: 'Dewey'
    }
];

//loop over dinosaurs
//build up a domstring
//print domstring to the dom

const buildDinosaurs=()=>
{
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++)
    {
        domString += `<div class='dinosaur'>`;
        domString +=    `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
    }
    printToDom('dino-barn', domString);
};

const init =()=>
{
    buildDinosaurs();

};
init();
