function deletar(){
    let id_deletar = document.getElementById('id_deletar').value
    fetch(`https://6532dfa7d80bd20280f621d6.mockapi.io/lista/${id_deletar}`, {
        method:'DELETE',
})
.then(response=>{
    return response.json()
})
.then(data=>{
    console.log(data)
    alert(`O ID ${data.id} foi deletado com sucesso!`)
    document.getElementById('id_deletar').value = ""
})
.catch(erro=>{
    console.log('Ocorreu um erro ', erro)
})
}