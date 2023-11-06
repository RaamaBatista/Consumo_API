function adicionar() {

    let data = document.getElementById('data').value
    let qtd = document.getElementById('qtd').value
    let name = document.getElementById('name').value
    let tipo = document.getElementById('tipo').value
    let preco = document.getElementById('preco').value

    let lista = {
        'data': data,
        'qtd': qtd,
        'name': name,
        'tipo': tipo,
        'preco': preco,
    }
    console.log(lista)
    fetch(`https://6532dfa7d80bd20280f621d6.mockapi.io/lista`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(lista)
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('Dados enviados!', data)
            alert("Item cadastrado com sucesso!")
            document.getElementById('data').value = ""
            document.getElementById('qtd').value = ""
            document.getElementById('name').value = ""
            document.getElementById('tipo').value = ""
            document.getElementById('preco').value = ""
        })
        .catch(error => {
            console.log('Teve um pequeno problema', error)
        })
}