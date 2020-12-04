import axios, {
    AxiosError,
    AxiosResponse
} from "../../node_modules/axios/index"

interface ICustomer{
    counter: number
    dateTime: Date
}

interface IWeather{
    location: string
    temperature: number
    rain: number
    sun: number
    wind: number
    dateTime: Date
}

interface IProduct{
    fkid: number
    name: string
    price: number
    protein: number
    isHot: boolean
}

//REST urls
let customerUrl: string = "https://smartcanteenrest.azurewebsites.net/api/customers";
let weatherUrl: string = "https://smartcanteenrest.azurewebsites.net/api/weather/saves";
let productUrl: string = "https://smartcanteenrest.azurewebsites.net/api/products";
let productIsHotTrue: string = "http://smartcanteenrest.azurewebsites.net/api/products/true";
let productIsHotFalse: string = "http://smartcanteenrest.azurewebsites.net/api/products/false";
let categoryOne: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/1";
let categoryTwo: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/2";
let categoryThree: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/3";
let categoryFour: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/4";
let categoryFive: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/5";

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        customers: [],
        weatherreport: [],
        sales: [],
        products: []
    },
    methods: {
        // GETS
        getAllCustomers(){
            this.CustomerHelperGetAndShow(customerUrl)
        },
        getWeatherReport(){
            this.WeatherHelperGetAndShow(weatherUrl)
        },
        getAllProducts(){
            this.ProductHelperGetAndShow(productUrl)
        },
        getAllHotProducts(){
            this.ProductHelperGetAndShow(productIsHotTrue)
        },
        getAllColdProducts(){
            this.ProductHelperGetAndShow(productIsHotFalse)
        },
        getCategoryOne(){
            this.ProductHelperGetAndShow(categoryOne)
        },
        getCategoryTwo(){
            this.ProductHelperGetAndShow(categoryTwo)
        },
        getCategoryThree(){
            this.ProductHelperGetAndShow(categoryThree)
        },
        getCategoryFour(){
            this.ProductHelperGetAndShow(categoryFour)
        },
        getCategoryFive(){
            this.ProductHelperGetAndShow(categoryFive)
        },
        // Customer
        CustomerHelperGetAndShow(url: string){
            axios.get<ICustomer[]>(url)
            .then((Response: AxiosResponse<ICustomer[]>) => {
                this.customers = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        // Weather
        WeatherHelperGetAndShow(url: string){
            axios.get<IWeather[]>(url)
            .then((Response: AxiosResponse<IWeather[]>) => {
                this.weatherreport = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        // Product
        ProductHelperGetAndShow(url: string){
            axios.get<IProduct[]>(url)
            .then((Response: AxiosResponse<IProduct[]>) => {
                this.products = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
       // Clears Customer array
        clearAllData(){
            this.customers = 0;
        },
        // Clears Weather array
        clearAllWeather(){
            this.weatherreport = 0;
        },
        // Clears Product array
        clearAllProducts(){
            this.products = 0;
        }
    }
    
})