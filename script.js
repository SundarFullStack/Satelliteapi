
async function weatherDetector() {
    
    try {

        let result =await(await fetch("https://isro.vercel.app/api/customer_satellites")).json();

        let output = result.customer_satellites;

        console.log(foo(output));
        
    } catch (error) {
        
        console.log(error)
        
    }
}

weatherDetector();

//bootstrap layout

let container = document.createElement('div');

container.setAttribute('class', 'container');

let row1 = document.createElement('div');

row1.setAttribute('class', 'row');

let row2 = document.createElement('div');

row2.setAttribute('class', 'row');

let box_outer = document.createElement('div');

box_outer.setAttribute('class', 'col d-flex justify-content-center')

let header = document.createElement('h3');

header.innerText = 'Satellite Launched Reports:';

header.style.textAlign='center'

//table creation

let table = document.createElement('table');

table.setAttribute('class','table table-striped table-dark')

let thead = document.createElement('thead');

let tr1 = document.createElement('tr');

let id = document.createElement('th');

id.innerText = 'ID';

let CountryName = document.createElement('th');

CountryName.innerText = 'Country Name';

let  Launcher= document.createElement('th');

Launcher.innerText = 'Launcher';

let LaunchDate = document.createElement('th');

LaunchDate.innerText = 'Launched Date';

let Mass = document.createElement('th');

Mass.innerText = 'Mass';


let tbody = document.createElement('tbody');

let tr2 = document.createElement('tr');

let td1 = document.createElement('td');

let td2 = document.createElement('td');

let td3 = document.createElement('td');

let td4 = document.createElement('td');

let td5 = document.createElement('td');


document.body.append(container);

container.append(row1);

container.append(row2);

row1.append(header);

row2.append(box_outer);

box_outer.append(table);

table.append(thead);

table.append(tbody);

thead.append(tr1);

tr1.append(id);

tr1.append(CountryName);

tr1.append(Launcher);

tr1.append(LaunchDate);

tr1.append(Mass);


function foo(data) {

    console.log(data[0])

    for (let i = 0; i < data.length; i++){

        let tr2 = document.createElement('tr');

        let td1 = document.createElement('td');

        td1.innerText = data[i].id;

        let td2 = document.createElement('td');

        td2.innerText = data[i].country;

        let td3 = document.createElement('td');
        
        let date = new Date(data[i].launch_date);

        td3.innerText = date;

        let td4 = document.createElement('td');
        
        td4.innerText = data[i].launcher;

        let td5 = document.createElement('td');

        td5.innerText = data[i].mass;

        tbody.append(tr2);

        tr2.append(td1);

        tr2.append(td2);

        tr2.append(td3);

        tr2.append(td4);

        tr2.append(td5);


        


    }
    

}