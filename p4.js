
function submit() {
    var display = ``;
    var total = 0;
    var text = document.getElementsByClassName("box")[0].value;
   myFetch(apiURL + text).then((d) => {
    let data = JSON.parse(d);
    display += `<h2>Order ${text}</h2>
   <table> <thead><tr><th title="Field #1">item</th>
    <th title="Field #2">quantity</th>
    <th title="Field #3">price</th></tr></thead>
    <tbody>`
    for (let i = 0; i< data.length; i++){
        display += `<tr><td>${data[i].item}</td>
        <td>${data[i].quantity}</td>
        <td>${data[i].price}</td></tr>`;
        total += parseFloat(data[i].quantity) * parseFloat(data[i].price);
    }
    total = total.toFixed(2);
    display += `<tr><td>Total</td>
    <td></td>
    <td>$${total}</td></tr>`
    display += `</tbody></table>`;
    document.getElementById("info").innerHTML = display;
  });

}
function myFetch(url) {
    console.log("Fetching " + url);
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject({ status: xhr.status, response: xhr.response });
          }
        }
      }
      xhr.open('GET', url, true);
      xhr.send();
    });
  }
  
  const apiURL = 'https://www.cis.gvsu.edu/~kurmasz/Orders/';
