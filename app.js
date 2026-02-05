'use strict'

console.log(converCurrency(10,"RUB","ЗАГ зАГ"));

function converCurrency(sum, current_currency, convert_currency){
    const option = {
        style : "currency",
        currency: ""
    } 
    switch(true){
        case convert_currency=="RUB":
                option.currency = convert_currency;
                if(current_currency == "USD"){
                    return new Intl.NumberFormat('ru-RU',option).format((sum*76.55).toFixed(2));
                }
                if(current_currency == "EUR"){
                    return new Intl.NumberFormat('ru-RU',option).format((sum*90.29).toFixed(2));
                }  
            break;
        case convert_currency=="USD":
                option.currency = convert_currency;
                if(current_currency == "RUB"){
                    return new Intl.NumberFormat('en-US',option).format((sum*0.013063).toFixed(2));
                }
                if(current_currency == "EUR"){
                    return new Intl.NumberFormat('en-US',option).format((sum*1.18).toFixed(2)); 
                }  
            break;

        case convert_currency=="EUR":
                option.currency = convert_currency;
                if(current_currency == "RUB"){
                    return new Intl.NumberFormat('de-DE',option).format((sum*0.011076).toFixed(2));
                }
                if(current_currency == "USD"){
                    return new Intl.NumberFormat('de-DE',option).format((sum*0.8474).toFixed(2)); 
                }
            break;

        default:
            return `Мы не конвертируем в валюту ${convert_currency}`;
    }
}