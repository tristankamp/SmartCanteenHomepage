import axios, {
    AxiosError,
    AxiosResponse
} from "../../node_modules/axios/index"


interface ICustomer{
    counter: number
    dateTime: Date
}

interface IWeather{
    temperature: number
    windspeed: number
    precipitation: number
    sunshine: number
}

let customerUrl: string = "https://smartcanteenrest.azurewebsites.net/api/customers";
let weatherUrl: string = "https://smartcanteenrest.azurewebsites.net/api/weather";

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        customers: [],
        weatherreport: [],
        sales: []
    },
    methods: {
        getAllCustomers(){
            this.CustomerHelperGetAndShow(customerUrl)
        },
        getWeatherReport(){
            this.WeatherHelperGetAndShow(weatherUrl)
        },
        CustomerHelperGetAndShow(url: string){
            axios.get<ICustomer[]>(url)
            .then((Response: AxiosResponse<ICustomer[]>) => {
                this.customers = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        WeatherHelperGetAndShow(url: string){
            axios.get<IWeather[]>(url)
            .then((Response: AxiosResponse<IWeather[]>) => {
                this.weatherreport = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        clearAllData(){
            this.customers = 0;
        },
        clearAllWeather(){
            this.weatherreport = 0;
        },
        getAllSales(){

        },
        clearAllSales(){
            this.sales = 0;
        }
    }
    
})