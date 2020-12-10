import axios, {
    AxiosError,
    AxiosResponse
} from "../../node_modules/axios/index"

// Interfaces
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

interface IOrder{
    orderId: number
    productCount: number
    orderDate: Date
}

interface ISale{
    prodId: number
    salesQuantity: number
    prodName: string
    prodPrice: number
    totalPrice: number
    orderDate: Date
}

//REST urls
let customerUrl: string = "https://smartcanteenrest.azurewebsites.net/api/customers";
let ordersUrl: string = "https://smartcanteenrest.azurewebsites.net/api/orders";
let weatherUrl: string = "https://smartcanteenrest.azurewebsites.net/api/weather/saves";
let productUrl: string = "https://smartcanteenrest.azurewebsites.net/api/products";
let productIsHotTrue: string = "http://smartcanteenrest.azurewebsites.net/api/products/true";
let productIsHotFalse: string = "http://smartcanteenrest.azurewebsites.net/api/products/false";
let categoryOne: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/1";
let categoryTwo: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/2";
let categoryThree: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/3";
let categoryFour: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/4";
let categoryFive: string = "https://smartcanteenrest.azurewebsites.net/api/products/category/5";
let productFoodUrl: string = "https://smartcanteenrest.azurewebsites.net/api/Products/saleSpecificFoodDate";
let productDrinkUrl: string = "https://smartcanteenrest.azurewebsites.net/api/Products/saleSpecificDrinkDate";

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        todaysCustomers: null,
        customers: [],
        weatherreport: [],
        sales: [],
        products: [],
        orders: [],
        date: "",
        specificFoodSale: [],
        specificDrinkSale: []
    },
    // Upon load
    created(){
        this.getTodaysCustomers()
    },
    methods: {
        // GETS
        getAllCustomers(){
            this.CustomerHelperGetAndShow(customerUrl)
        },
        getTodaysCustomers(){
            setInterval(() => {
                this.CustomerHelperGetAndShow2(customerUrl + "/today")
            }, 5000);   
        },
        getWeatherReport(){
            this.WeatherHelperGetAndShow(weatherUrl)
        },
        getAllProducts(){
            this.ProductHelperGetAndShow(productUrl)
        },
        getAllOrders(){
            this.OrderHelperGetAndShow(ordersUrl)
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
        // All CustomerData
        CustomerHelperGetAndShow(url: string){
            axios.get<ICustomer[]>(url)
            .then((Response: AxiosResponse<ICustomer[]>) => {
                this.customers = Response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        // Todays CustomerData
        CustomerHelperGetAndShow2(url: string){
            axios.get<ICustomer>(url)
            .then((Response: AxiosResponse<ICustomer>) => {
                this.todaysCustomers = Response.data
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
        // Orders
        getOrderByDate(date: Date) {
            let uri: string = ordersUrl + "/" + date
            axios.get<IOrder>(uri)
            .then((Reponse: AxiosResponse<IOrder>) => {
                this.orders = Reponse.data
            }) 
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        // Specific sale by date
        getSpecificFoodByDate(date: Date){
            let uri: string = productFoodUrl + "/" + date
            axios.get<ISale>(uri)
            .then((Response: AxiosResponse<ISale>) => {
                this.specificFoodSale = Response.data
            })
            .catch ((error: AxiosError) =>{
                alert(error.message)
            })
        },
        // Specific sale by date
        getSpecificDrinkByDate(date: Date){
            let uri: string = productDrinkUrl + "/" + date
            axios.get<ISale>(uri)
            .then((Response: AxiosResponse<ISale>) => {
                this.specificDrinkSale = Response.data
            })
            .catch ((error: AxiosError) => {
                alert(error.message)
            })
        },
        // Clear Customer array
        clearAllData(){
            this.customers = 0;
        },
        // Clear Weather array
        clearAllWeather(){
            this.weatherreport = 0;
        },
        // Clear Product array
        clearAllProducts(){
            this.products = 0;
        },
        // Clear Order array
        clearAllOrders(){
            this.orders = 0;
        },
        // Clear both Sales array
        clearSpecificItem(){
            this.specificFoodSale = 0
            this.specificDrinkSale = 0
        }
    }
})