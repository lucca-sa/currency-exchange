const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")


convertButton.addEventListener("click", convertValues)
currencySelectToConvert.addEventListener("change", changeCurrency)
currencySelectConverted.addEventListener("change", changeCurrency)

async function  convertValues() {
    const inputValue = document.querySelector(".input-ammount").value 
    const currencyToConvert = document.querySelector(".currency-to-convert") 
    const convertedCurrency = document.querySelector(".converted-currency") 

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(response => response.json())
    const realToday = 1
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high



    if (currencySelectToConvert.value == "real") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue) 

        if (currencySelectConverted.value == "real") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue)
        }

        if (currencySelectConverted.value == "dolar") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue / dolarToday)
        }

        if (currencySelectConverted.value == "euro") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue / euroToday)
        }

        if (currencySelectConverted.value == "libra") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", }).format(inputValue / libraToday)
        }

        if (currencySelectConverted.value == "bitcoin") {
            const bitcoinConverted = inputValue / bitcoinToday
            convertedCurrency.innerHTML = "₿" + bitcoinConverted.toFixed(4)
        }
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue)

        if (currencySelectConverted.value == "real") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue * dolarToday / realToday)
        }

        if (currencySelectConverted.value == "dolar") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue * dolarToday / dolarToday)
        }

        if (currencySelectConverted.value == "euro") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue * dolarToday / euroToday)
        }

        if (currencySelectConverted.value == "libra") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", }).format(inputValue * dolarToday / libraToday)
        }

        if (currencySelectConverted.value == "bitcoin") {
            const bitcoinConverted = inputValue * dolarToday / bitcoinToday
            convertedCurrency.innerHTML = "₿" + bitcoinConverted.toFixed(4)
        }
    }

    if (currencySelectToConvert.value == "euro") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue)


        if (currencySelectConverted.value == "real") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue * euroToday / realToday)
        }

        if (currencySelectConverted.value == "dolar") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue * euroToday / dolarToday)
        }

        if (currencySelectConverted.value == "euro") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue * euroToday / euroToday)
        }

        if (currencySelectConverted.value == "libra") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", }).format(inputValue * euroToday / libraToday)
        }

        if (currencySelectConverted.value == "bitcoin") {
            const bitcoinConverted = inputValue * euroToday / bitcoinToday
            convertedCurrency.innerHTML = "₿" + bitcoinConverted.toFixed(4)
        }
    }

    if (currencySelectToConvert.value == "libra") {
        currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", }).format(inputValue)

        if (currencySelectConverted.value == "real") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue * libraToday / realToday)
        }

        if (currencySelectConverted.value == "dolar") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue * libraToday / dolarToday)
        }

        if (currencySelectConverted.value == "euro") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue * libraToday / euroToday)
        }

        if (currencySelectConverted.value == "libra") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", }).format(inputValue * libraToday / libraToday)
        }

        if (currencySelectConverted.value == "bitcoin") {
            const bitcoinConverted = inputValue * libraToday / bitcoinToday
            convertedCurrency.innerHTML = "₿" + bitcoinConverted.toFixed(4)
        }
    }

    if (currencySelectToConvert.value == "bitcoin") {
        currencyToConvert.innerHTML = "₿ " + inputValue

        if (currencySelectConverted.value == "real") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue * bitcoinToday / realToday)
        }

        if (currencySelectConverted.value == "dolar") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputValue * bitcoinToday / dolarToday)
        }

        if (currencySelectConverted.value == "euro") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputValue * bitcoinToday / euroToday)
        }

        if (currencySelectConverted.value == "libra") {
            convertedCurrency.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", }).format(inputValue * bitcoinToday / libraToday)
        }

        if (currencySelectConverted.value == "bitcoin") {
            const bitcoinConverted = inputValue * bitcoinToday / bitcoinToday
            convertedCurrency.innerHTML = "₿" + bitcoinConverted.toFixed(4)
        }
    }





}

function changeCurrency() {
    const convertedCurrencyName = document.querySelector(".converted-currency-name")
    const convertedCurrencyImg = document.querySelector(".converted-currency-img")
    const toConvertCurrencyName = document.querySelector(".to-convert-currency-name")
    const toConvertCurrencyImg = document.querySelector(".to-convert-currency-img")

    if (currencySelectToConvert.value == "real") {
        toConvertCurrencyName.innerHTML = "Real Brasileiro"
        toConvertCurrencyImg.src = "./assets/br-real.png"
    }

    if (currencySelectToConvert.value == "dolar") {
        toConvertCurrencyName.innerHTML = "Dólar Estadunidense"
        toConvertCurrencyImg.src = "./assets/us-dolar.png"
    }

    if (currencySelectToConvert.value == "euro") {
        toConvertCurrencyName.innerHTML = "Euro"
        toConvertCurrencyImg.src = "./assets/euro.png"
    }

    if (currencySelectToConvert.value == "libra") {
        toConvertCurrencyName.innerHTML = "Libra Esterlina"
        toConvertCurrencyImg.src = "./assets/libra.png"
    }

    if (currencySelectToConvert.value == "bitcoin") {
        toConvertCurrencyName.innerHTML = "₿ Bitcoin"
        toConvertCurrencyImg.src = "./assets/bitcoin.png"
    }


    if (currencySelectConverted.value == "real") {
        convertedCurrencyName.innerHTML = "Real Brasileiro"
        convertedCurrencyImg.src = "./assets/br-real.png"
    }

    if (currencySelectConverted.value == "dolar") {
        convertedCurrencyName.innerHTML = "Dólar Estadunidense"
        convertedCurrencyImg.src = "./assets/us-dolar.png"
    }

    if (currencySelectConverted.value == "euro") {
        convertedCurrencyName.innerHTML = "Euro"
        convertedCurrencyImg.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "libra") {
        convertedCurrencyName.innerHTML = "Libra Esterlina"
        convertedCurrencyImg.src = "./assets/libra.png"
    }

    if (currencySelectConverted.value == "bitcoin") {
        convertedCurrencyName.innerHTML = "₿ Bitcoin"
        convertedCurrencyImg.src = "./assets/bitcoin.png"
    }


    convertValues()
}


