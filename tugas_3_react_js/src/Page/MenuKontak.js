import React,{Component} from "react";

class MenuKontak extends Component {
    constructor (props) {
        super (props);
        this.state={
            alamat : "JL. Swadaya IV, Pd. ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            kontak :"081312345678",
        }

    }
    render(){
        return (
            <center>
                <h3>{this.state.alamat}</h3>
                <h4>Kontak Kami : {this.state.kontak}</h4>
            </center>
        )
    }
}

export default MenuKontak;