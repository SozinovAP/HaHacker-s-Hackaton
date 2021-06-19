const selectElement = document.querySelector('.standard');
const db = require('./public/javascripts/dataBase');

selectElement.addEventListener('change', (event) => {
    var e = document.getElementById('standard');
    var r = e.value;
    if (r === "1")
        show1();
    if (r === "2")
        show2();
    if (r === "3")
        show3();
});

function show1()
{
    let ed = document.getElementById('Standards-first-medic-help');
    let ed1 = document.getElementById('Standards-special-med-help');
    let ed2 = document.getElementById('Standards-imidi-med-help');

    ed1.style.visibility = 'hidden';
    ed2.style.visibility = 'hidden';
    ed.style.visibility = 'visible';
}
function show2()
{
    let ed = document.getElementById('Standards-special-med-help');
    let ed1 = document.getElementById('Standards-first-medic-help');
    let ed2 = document.getElementById('Standards-imidi-med-help');

    ed1.style.visibility = 'hidden';
    ed2.style.visibility = 'hidden';
    ed.style.visibility = 'visible';
}
function show3()
{
    let ed = document.getElementById('Standards-imidi-med-help');
    let ed1 = document.getElementById('Standards-special-med-help');
    let ed2 = document.getElementById('Standards-first-medic-help');

    ed1.style.visibility = 'hidden';
    ed2.style.visibility = 'hidden';
    ed.style.visibility = 'visible';
}

function ExampleWorkWithCallback()
{
    db.GetCriteria("orderClause", (/*variables*/)=>{
        //Action
});
}