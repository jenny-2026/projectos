const convertButton = document.querySelector(".converter-button")
const selectInicialValue = document.querySelector(".select-inicial")
const selectConverterValue = document.querySelector(".select-a-converter")

function convertValues() {

    const inputMoedaValue = document.querySelector(".input-moeda").value
    const moedaConverterValue = document.querySelector(".valor-para-converter")
    const moedaConvertidaValue = document.querySelector(".valor-convertido")

    console.log(selectConverterValue.value)



    if (selectInicialValue.value == "real") {
        moedaConverterValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputMoedaValue)

    }
    if (selectInicialValue.value == "dolar") {
        moedaConverterValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValue)

    }
    if (selectInicialValue.value == "euro") {
        moedaConverterValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValue)

    }
    if (selectInicialValue.value == "libra") {
        moedaConverterValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValue)

    }
    if (selectInicialValue.value == "bit") {
        moedaConverterValue.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "XBT"
        }).format(inputMoedaValue)

    }

    const dolarToday = 5.5
    const euroToday = 6.2
    const libraToday = 3.12
    const realToday = 6.22
    const bitcoinToday = 3.5


    if (selectConverterValue.value == "real") {
        moedaConvertidaValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputMoedaValue / realToday)
    }

    if (selectConverterValue.value == "dolar") {
        moedaConvertidaValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValue / dolarToday)

    }

    if (selectConverterValue.value == "libra") {
        moedaConvertidaValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValue / libraToday)
    }
    if (selectConverterValue.value == "euro") {
        moedaConvertidaValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "eur"
        }).format(inputMoedaValue / euroToday)
    }

    if (selectConverterValue.value == "bit") {
        moedaConvertidaValue.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "XBT"
        }).format(inputMoedaValue / bitcoinToday)
    }


}

function changeSelectConverter() {
    const moedaxValue = document.querySelector(".moedasx")
    const superimgValue = document.querySelector(".super-img")

    if (selectInicialValue.value == "real") {
        moedaxValue.innerHTML = "Real Brasileiro"
        superimgValue.src = "./asset/real brasileiro.png"
    }

    if (selectInicialValue.value == "dolar") {
        moedaxValue.innerHTML = "Dolar Americano"
        superimgValue.src = "./asset/dolar.png"
    }

    if (selectInicialValue.value == "libra") {
        moedaxValue.innerHTML = "Libras Esterlina"
        superimgValue.src = "./asset/libras.png"
    }
    if (selectInicialValue.value == "euro") {
        moedaxValue.innerHTML = "Euro"
        superimgValue.src = "./asset/euro.png"
    }

    if (selectInicialValue.value == "bit") {
        moedaxValue.innerHTML = "Bitcoin"
        superimgValue.src = "./asset/bitcoin.png"
    }

convertValues
}
function changeSelectConvertido() {
    const moedaValue = document.querySelector(".moeday")
    const imagenesValue = document.querySelector(".imagenes")

    if (selectConverterValue.value == "real") {
        moedaValue.innerHTML = "Real Brasileiro"
        imagenesValue.src = "./asset/real brasileiro.png"
    }

    if (selectConverterValue.value == "dolar") {
        moedaValue.innerHTML = "Dolar Americano"
        imagenesValue.src = "./asset/dolar.png"
    }

    if (selectConverterValue.value == "libra") {
        moedaValue.innerHTML = "Libras Esterlina"
        imagenesValue.src = "./asset/libras.png"
    }
    if (selectConverterValue.value == "euro") {
        moedaValue.innerHTML = "Euro"
        imagenesValue.src = "./asset/euro.png"
    }

    if (selectConverterValue.value == "bit") {
        moedaValue.innerHTML = "Bitcoin"
        imagenesValue.src = "./asset/bitcoin.png"
    }

    convertValues()

}


selectConverterValue.addEventListener("change", changeSelectConvertido)
selectInicialValue.addEventListener("change", changeSelectConverter)
convertButton.addEventListener("click", convertValues)