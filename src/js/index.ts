import axios, {
    AxiosError,
    AxiosResponse
} from "../../node_modules/axios/index"


interface ICustomer{
    counter: number
    dateTime: Date
}

let baseUrl: string = "https://smartcanteenrest.azurewebsites.net/api/customers";

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
            this.helperGetAndShow(baseUrl)
        },
        helperGetAndShow(url: string){
            axios.get<ICustomer[]>(url)
            .then((Response: AxiosResponse<ICustomer[]>) => {
                this.customers = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        clearAllData(){
            this.customers = 0;
        },
        getWeatherReport(){

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