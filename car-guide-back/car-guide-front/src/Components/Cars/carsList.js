import React, {Component} from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Car from "./car";
class CarsList extends Component {
    getAll(){
        fetch(
           "/cars/" 
        ).then((response)=>{response.json();
        }).then(data=>this.setState({carros:data}))
    }
    constructor(props) {
        super(props);
        this.state= { 
            carros:[],
        };
        this.state = {
            cars:[
                {
                    "year": 1976,
                    "km": 100000,
                    "category": "auto",
                    "color": "Plateado",
                    "enter_date": "11/06/2010",
                    "name": "BMW 507 1",
                    "license": "861-PDI",
                    "price": 160000000,
                    "brand": "BMW",
                    "centcubs": 3200,
                    "cil_capacity": 150,
                    "model": "BMW 507",
                    "doors": 2,
                    "transmission": "mecanica",
                    "image": "https://1.bp.blogspot.com/-vzt9wxbU-tY/Wq0UPgzwQCI/AAAAAAABo5U/pgLggGmND1QraS6wSIeCcL8inQ1oCEHfACLcBGAs/s1600/AP3T3146.JPG"
                  },
                  {
                    "year": 1960,
                    "km": 90000,
                    "category": "auto",
                    "color": "Negro",
                    "enter_date": "07/04/2012",
                    "name": "BMW 507 2",
                    "license": "347-FNK",
                    "price": 165000000,
                    "brand": "BMW",
                    "centcubs": 3200,
                    "cil_capacity": 150,
                    "model": "BMW 507",
                    "doors": 2,
                    "transmission": "mecanica",
                    "image": "https://i.pinimg.com/736x/62/bc/0e/62bc0e9b24a7ae38c581760b2ed9d9a4--bmw-roadster-antique-cars.jpg"
                  },
                  {
                    "year": 1972,
                    "km": 105000,
                    "category": "auto",
                    "color": "Rojo",
                    "enter_date": "06/30/2011",
                    "name": "BMW 507 2",
                    "license": "440-HYE",
                    "price": 160000000,
                    "brand": "BMW",
                    "centcubs": 3200,
                    "cil_capacity": 150,
                    "model": "BMW 507",
                    "doors": 2,
                    "transmission": "mecanica",
                    "image": "https://i.pinimg.com/736x/a5/7c/d0/a57cd0f4f1e8e06600eeafd94df6952d--bmw-classic-bmw-cars.jpg"
                  },
                  {
                    "year": 2000,
                    "km": 20000,
                    "category": "auto",
                    "color": "Azul",
                    "enter_date": "02/17/2015",
                    "name": "BMW Z8 1",
                    "license": "048-UKX",
                    "price": 280000000,
                    "brand": "BMW",
                    "centcubs": 4900,
                    "cil_capacity": 400,
                    "model": "BMW Z8",
                    "doors": 2,
                    "transmission": "mecanica",
                    "image": "https://www.classicdriver.com/sites/default/files/styles/two_third_slider/public/cars_images/feed_499796/1ac4a62afa629b31a6cda86f8ecae8810e3d7e72.jpg?itok=7o2i3cRu"
                  },
                  {
                    "year": 2002,
                    "km": 18000,
                    "category": "auto",
                    "color": "Rojo",
                    "enter_date": "01/15/2015",
                    "name": "BMW Z8 2",
                    "license": "696-NXU",
                    "price": 286000000,
                    "brand": "BMW",
                    "centcubs": 4900,
                    "cil_capacity": 400,
                    "model": "BMW Z8",
                    "doors": 2,
                    "transmission": "mecanica",
                    "image": "https://cloud10.todocoleccion.online/coches-a-escala/tc/2015/09/17/00/51323358_27661983.jpg"
                  },
                  {
                    "year": 2004,
                    "km": 19000,
                    "category": "auto",
                    "color": "Plateado",
                    "enter_date": "10/05/2017",
                    "name": "BMW Z8 3",
                    "license": "772-CWX",
                    "price": 284000000,
                    "brand": "BMW",
                    "centcubs": 4900,
                    "cil_capacity": 400,
                    "model": "BMW Z8",
                    "doors": 2,
                    "transmission": "mecanica",
                    "image": "https://s13252.pcdn.co/wp-content/uploads/2018/01/5a69148c6d14e_15161338087dff9f98764daZ89-940x541.jpg"
                  },
                  {
                    "year": 2017,
                    "km": 8000,
                    "category": "auto",
                    "color": "Azul",
                    "enter_date": "02/05/2013",
                    "name": "BMW M5 1",
                    "license": "638-EVN",
                    "price": 368000000,
                    "brand": "BMW",
                    "centcubs": 4400,
                    "cil_capacity": 600,
                    "model": "BMW M5",
                    "doors": 4,
                    "transmission": "automatico",
                    "image": "http://www.caranddriver.es/themes/ee/site/CD/asset/img/contenidos/10607/bmw-m5-2018__pinned.jpg"
                  },
                  {
                    "year": 2018,
                    "km": 5000,
                    "category": "auto",
                    "color": "Vinotinto",
                    "enter_date": "06/23/2011",
                    "name": "BMW M5 2",
                    "license": "387-CPS",
                    "price": 370000000,
                    "brand": "BMW",
                    "centcubs": 4400,
                    "cil_capacity": 600,
                    "model": "BMW M5",
                    "doors": 4,
                    "transmission": "automatico",
                    "image": "https://i.gaw.to/photos/3/0/4/304864_2018_BMW_5_Series.jpg"
                  },
                  {
                    "year": 2016,
                    "km": 1000,
                    "category": "auto",
                    "color": "Blanco",
                    "enter_date": "01/21/2015",
                    "name": "BMW M5 3",
                    "license": "285-URW",
                    "price": 378000000,
                    "brand": "BMW",
                    "centcubs": 4400,
                    "cil_capacity": 600,
                    "model": "BMW M5",
                    "doors": 4,
                    "transmission": "automatico",
                    "image": "https://icdn-3.motor1.com/images/mgl/BnpBR/s4/2018-bmw-m5-with-m-performance-parts.jpg"
                  },
                  {
                    "year": 1972,
                    "km": 900000,
                    "category": "auto",
                    "color": "Verde",
                    "enter_date": "12/14/2014",
                    "name": "Audi 80B1 1",
                    "license": "626-HMM",
                    "price": 125000000,
                    "brand": "Audi",
                    "centcubs": 1500,
                    "cil_capacity": 74,
                    "model": "Audi 80 B1",
                    "doors": 4,
                    "transmission": "mecanica",
                    "image": "https://i.pinimg.com/originals/39/0a/a9/390aa9b1f35862d15902f57a65f46966.jpg"
                  },
                  {
                    "year": 1972,
                    "km": 1005000,
                    "category": "auto",
                    "color": "Azul",
                    "enter_date": "05/02/2012",
                    "name": "Audi 80B1 2",
                    "license": "591-PKE",
                    "price": 115000000,
                    "brand": "Audi",
                    "centcubs": 1500,
                    "cil_capacity": 74,
                    "model": "Audi 80 B1",
                    "doors": 4,
                    "transmission": "mecanica",
                    "image": "https://images.honestjohn.co.uk/imagecache/file/fit/730x700/media/5723205/Audi%2080%20(4).jpg"
                  },
                  {
                    "year": 1974,
                    "km": 1000000,
                    "category": "auto",
                    "color": "Naranja",
                    "enter_date": "03/27/2011",
                    "name": "Audi 80B1 3",
                    "license": "012-AVC",
                    "price": 115000000,
                    "brand": "Audi",
                    "centcubs": 1500,
                    "cil_capacity": 74,
                    "model": "Audi 80 B1",
                    "doors": 4,
                    "transmission": "mecanica",
                    "image": "http://www.autoslavia.com/wp-content/uploads/2017/08/1975-Audi-80-B1-3870E-772x580.jpg"
                  },
                  {
                    "year": 2001,
                    "km": 101000,
                    "category": "auto",
                    "color": "Rojo",
                    "enter_date": "01/19/2014",
                    "name": "Audi A4 B6 1",
                    "license": "019-FCU",
                    "price": 185000000,
                    "brand": "Audi",
                    "centcubs": 1984,
                    "cil_capacity": 150,
                    "model": "Audi A4 B6",
                    "doors": 4,
                    "transmission": "mecanica",
                    "image": "https://www.tuningblog.eu/tr/wp-content/uploads/2016/07/Audi-A4-B8-Limousine-ROT-RED-Tuning-Vossen-Wheels.jpg"
                  },
                  {
                    "year": 2007,
                    "km": 45000,
                    "category": "auto",
                    "color": "Plateado",
                    "enter_date": "10/19/2016",
                    "name": "Audi A4 B6 2",
                    "license": "480-XEB",
                    "price": 194000000,
                    "brand": "Audi",
                    "centcubs": 1984,
                    "cil_capacity": 150,
                    "model": "Audi A4 B6",
                    "doors": 4,
                    "transmission": "mecanica",
                    "image": "https://images.honestjohn.co.uk/imagecache/file/fit/730x700/media/7180406/Audi~A4~2001~(2).jpg"
                  },
                  {
                    "year": 2004,
                    "km": 84000,
                    "category": "auto",
                    "color": "Azul",
                    "enter_date": "09/10/2017",
                    "name": "Audi A4 B6 3",
                    "license": "504-JXA",
                    "price": 190000000,
                    "brand": "Audi",
                    "centcubs": 1984,
                    "cil_capacity": 150,
                    "model": "Audi A4 B6",
                    "doors": 4,
                    "transmission": "mecanica",
                    "image": "http://tzwqcc.com/wp-content/uploads/2017/07/Unique-Audi-A4-2004-29-in-addition-Vehicle-Ideas-with-Audi-A4-2004.jpg"
                  },
            ],
        };
    }

    renderCars() {
        return this.state.carros.map(
            (car,i) => <div className="col-md-3"><Link to={`/cars/${car.name}`}>
                <Car obj={car} key={i}/>
            </Link> </div>
        )
    }
    render()
    {
        this.getAll();
        return(
            <div className="card-deck2 dashboard-background2">
                    <div className="container-fluid">
                        <div className="row">
                            {this.renderCars()}
                        </div>
                    </div>
            </div>
        )
    }

}
export default CarsList;