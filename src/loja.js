TacaItem.map((item, index) => {

    const formatoReal = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    const formatoMonetario = (valor) => {
        if(valor) {
            return valor.toFixed(2)
        }
    }
    
    let ItemCard = document.querySelector('.cards .card').cloneNode(true)

    //console.log(ItemCard)

    document.querySelector('.section-cards').append(ItemCard)

    //preencher os dados dos acessorios
    ItemCard.setAttribute('data-key', index)
    ItemCard.querySelector('.item-acesso--img img').src = item.img
    ItemCard.querySelector('.price-item').innerHTML = formatoReal(item.price)
    ItemCard.querySelector('.item-name').innerHTML = item.name
    ItemCard.querySelector('.item-desc').innerHTML = item.description

    // Item clicado

    ItemCard.querySelector('.card a').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('Clicou no item')

        //abrir janela
        document.querySelector('.ItemWindowArea').style.display = "flex"

        // preencher dados
        document.querySelector('.BigItem img').src = item.img
        document.querySelector('.ItemInfo h1').innerHTML = item.name
        document.querySelector('.InfoCard-actualPrice').innerHTML = formatoReal(item.price)
        document.querySelector('.ItemInfo--Desc').innerHTML = item.description

    })

    document.querySelector('.InfoCard--cancelButton').addEventListener('click', () => {
        document.querySelector('.ItemWindowArea').style.display = "none"
    })

    document.querySelector('.ItemInfo--CancelMobile').addEventListener('click', () => {
        document.querySelector('.ItemWindowArea').style.display = "none"
    })

})