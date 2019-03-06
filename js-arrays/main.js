
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


const assignments = [
    {
       title: 'product cards',
       dueDate: 'Due Date: 03/06/2019',
        topic: 'Topic: HTML/CSS',
        notes: 'Notes: Use flexbox',
       assignmentUrl: 'https://github.com/acasey98/js-arrays/pull/1'
    },
    {
        title: 'how to not be an asshole',
        dueDate: 'Due Date: 03/07/2019',
         topic: 'Topic: what not to be',
         notes: 'Notes: dont be an asshole',
        assignmentUrl: 'https://github.com/acasey98/js-arrays/pull/1'
     },
     {
        title: 'nuggetizer',
        dueDate: 'Due Date: 03/08/2019',
         topic: 'Topic: how to make some nuggs',
         notes: 'Notes: nuggetize me capt\'n',
        assignmentUrl: 'https://github.com/acasey98/js-arrays/pull/1'
     },
     {
        title: 'burlywood',
        dueDate: 'Due Date: 03/09/2019',
         topic: 'Topic: the best CSS color',
         notes: 'Notes: burlywood is good',
        assignmentUrl: 'https://github.com/acasey98/js-arrays/pull/1'
     },
     {
        title: 'millenial privelege',
        dueDate: 'Due Date: 03/10/2019',
         topic: 'Topic: g*sh d*ng MILLENIALS',
         notes: 'Notes: made up by boomers',
        assignmentUrl: 'https://github.com/acasey98/js-arrays/pull/1'
     }

];

const buildAssignmentCards=()=>
{
    let domString = '';
    for(let i = 0; i < assignments.length; i++)
    {
        domString += `<div class='listed-assignments'>`;
        domString +=    `<div class='assignmentitle'>`;
        domString +=        `<h3>${assignments[i].title}</h3>`;
        domString +=    `</div>`;
        domString +=    `<div class='due'>`;
        domString +=        `<p>${assignments[i].dueDate}</p>`;
        domString +=    `</div>`;
        domString +=    `<p>${assignments[i].topic}</p>`;
        domString +=    `<p>${assignments[i].notes}</p>`;
        domString +=    `<a href${assignments[i].assignmentUrl}></a>`;
        domString += `</div>`;
    }
    printToDom('assignment-names', domString);
};

//total of 5 asignments
//buildAssignmentCards - loop over assignments and make a domString
//reuse the printToDom function to display the domString



const init =()=>
{
    //buildDinosaurs();
    buildAssignmentCards();

};
init();
