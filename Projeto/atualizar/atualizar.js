function atualizar() {
    let data = document.getElementById('data').value
    let qtd = document.getElementById('qtd').value
    let name = document.getElementById('name').value
    let tipo = document.getElementById('tipo').value
    let preco = document.getElementById('preco').value
    let item = document.getElementById('item').value

    let lista = {
        'data': data,
        'qtd': qtd,
        'name': name,
        'tipo': tipo,
        'preco': preco,
    }
    fetch(`https://6532dfa7d80bd20280f621d6.mockapi.io/lista/${item}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lista)
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            alert(`O ID ${data.id} foi alterado`)
            document.getElementById('data').value = ""
            document.getElementById('qtd').value = ""
            document.getElementById('name').value = ""
            document.getElementById('tipo').value = ""
            document.getElementById('preco').value = ""
            document.getElementById('item').value = ""
        })
        .catch(err => {
            console.log('Ocorreu um pequeno erro ', err)
        })
}