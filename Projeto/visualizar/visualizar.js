

function visualizar() {
    fetch(`https://6532dfa7d80bd20280f621d6.mockapi.io/lista`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            let ol = document.createElement('ol')
            let resposta = document.getElementById('resposta')
            data.forEach(element => {
                let li = document.createElement('li')
                li.textContent = ` O id é ${element.id} e o item é ${element.name}`
                ol.appendChild(li)
            });
            resposta.appendChild(ol)
        })
        .catch(error => {
            console.log(' Ocorreu esse erro ', error)
        })
}


function buscar() {
    let item = document.getElementById('item').value
    fetch(`https://6532dfa7d80bd20280f621d6.mockapi.io/lista/${item}`, {
        method: 'GET'
    })
        .then(response => {
           return  response.json()
        })
        .then(data => {
            let resposta = document.getElementById('resposta')
            let ul = document.createElement('ul')
            let li = document.createElement('li')
            li.textContent = ` O item desse id é ${data.id} e o elemento é ${data.name}`
            ul.appendChild(li)
            resposta.appendChild(ul)
            document.getElementById('item').value = ""

        })
        .catch(error => {
            console.log('Ocorreu um erro : ', error)
        })
}