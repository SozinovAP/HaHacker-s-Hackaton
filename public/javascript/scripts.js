
const selectElement = document.querySelector('.standard');
selectElement.addEventListener('change', (event) => {
    var e = document.getElementById('standard');
    var r = e.value;
    if (r === "1")
        show1();
    if (r === "2")
        show2();
    if (r === "3")
        show3();
    if (r === "0")
    {
        let ed = document.getElementById('Standards-first-medic-help');
        let ed1 = document.getElementById('Standards-special-med-help');
        let ed2 = document.getElementById('Standards-imidi-med-help');

        ed1.style.visibility = 'hidden';
        ed2.style.visibility = 'hidden';
        ed.style.visibility = 'hidden';
    }
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

const selectElement1 = document.querySelector('.ufo');
selectElement1.addEventListener('change', (event) => {
    var e = document.getElementById('ufo');
    var str = e.options[e.selectedIndex].text;
    var a = document.createElement("p");
    a.className = "analize";
    a.innerHTML = "Провести лабораторные методы исследования: " + str;
    var b = document.getElementById('lol');
    b.append(a);
});

const selectElement2 = document.querySelector('.doctors');
selectElement2.addEventListener('change', (event) => {
    var e = document.getElementById('doctors');
    var str = e.options[e.selectedIndex].text;
    var a = document.createElement("p");
    a.className = "napravleniya";
    a.innerHTML = "Посетить врача-специалиста: " + str;
    var b = document.getElementById('lol');
    b.append(a);
});

const selectElement3 = document.querySelector('.methods');
selectElement3.addEventListener('change', (event) => {
    var e = document.getElementById('methods');
    var str = e.options[e.selectedIndex].text;
    var a = document.createElement("p");
    a.className = "methods-search";
    a.innerHTML = "Провести инструментальный метод исследования: " + str;
    var b = document.getElementById('lol');
    b.append(a);
});

function SetCriteria()
{
    let adult = document.getElementById('Age');
    let disease = document.getElementById('Disease');

    let data1 = adult.valueOf();
    let data2 = disease.valueOf();

    console.log(data1);
    console.log(data2);

}