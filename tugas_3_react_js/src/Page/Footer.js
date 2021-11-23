import React,{Component} from "react";
// import TopEvent from "../Events/TopEvents";

class Footer extends Component {
    handleFooter(value,e){
        e.preventDefault();
        alert(value);

    };
    
    render (){
        return (
            <div>
                {/* <TopEvent /> */}
                <a href="/" onClick={e => this.handleFooter("Back To Home", e)}>
                    Back To Home
                </a>
                <h3>Tugas 3 React Js</h3>
            </div>
        );
    }
}

export default Footer;