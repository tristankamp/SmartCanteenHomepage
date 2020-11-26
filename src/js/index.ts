import axios, {
    AxiosError,
    AxiosResponse
} from "../../node_modules/axios/index"

interface ICustomer{
    counter: number
    dateTime: Date
}

let baseUrl: string = "//TODO rest uri";

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
      customerdata: [],
      idToGetBy: -1
    },
    methods: {
        helperGetAndShow(url: string){ // helper method 
            axios.get<ICustomer[]>(url)
            .then((response: AxiosResponse<ICustomer[]>) => {
                this.customerdata = response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        }, 
        getAllData(){
            this.helperGetAndShow(baseUrl)
        }
    }
})