const app = document.getElementById('root');
//insert logo here
const logo = document.createElement('img');
logo.src = 'bcra.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://haveibeenpwned.com/api/v2/breaches', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(breach => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card','red-text', );
  
      const h1 = document.createElement ('h1');
      h1.textContent = breach.Name;

      const p = document.createElement('p');
      breach.Description = breach.Description.substring(0, 300);
      p.textContent = `Brief Description: ${breach.Description}- <a>`;

      const h2 = document.createElement('h2');
      breach.BreachDate = breach.BreachDate.substring(0, 300);
      h2.textContent = `breach date: ${breach.BreachDate}`;

      
      


      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(h2);
      
      
    });
  } else {
    const errorMessage = document.createElement('Hell yea');
    errorMessage.textContent = `WTF!`;
    app.appendChild(errorMessage);
  }
}

request.send();
