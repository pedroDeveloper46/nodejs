const retornaBool = (nome) => {

    var final = ''
    for (let index = nome.length - 1; index > -1; index--) {
        final += nome.charAt(index)

    }

    if (final == nome) {
        return true
    } else {
        return false
    }
}


function palindromo(nome) {
    nome = nome.normalize("NFD").replace(/[^a-zA-Zs]/g, "")
    nome = nome.toLowerCase()
    return new Promise((resolve, reject) => {
        resolve(retornaBool(nome))
    })
}

async function main(palavra) {
    try {
        let retorno = await palindromo(palavra)
        if (retorno) {
            console.log(`${palavra} É UM PALINDROMO `)
        } else {
            console.log(`${palavra} NÃO É UM PALINDROMO `)
        }


    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

main('Após a sopa')