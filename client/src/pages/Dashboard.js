import React,{Component} from 'react'
import SideNav from '../Sections/SideNavbar';


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={pageTitle:"Dashboard"};
    }
    render(){
        return(
            <>
            <SideNav/>

  <div className="container">
      <div className="row2">
        <div className="col-lg-3">
          <div className="service-item first-service">
            <div className="icon"></div>
            <h4></h4>
            <p></p>
            <div className="text-button">
              <a href="#">View Resume  <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item second-service">
            <div className="icon"></div>
            <h4></h4>
            <p></p>
            <div className="text-button">
              <a href="#">View Resume <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item third-service">
            <div className="icon"></div>
            <h4></h4>
            <p> <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank"></a></p>
            <div className="text-button">
              <a href="#"> View Resume <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4> </h4>
            <p></p>
            <div className="text-button">
             <a href="#"> Add Resume  <i className="fa fa-view"></i></a>
              
              <a href="#"> Download Resume <i className="fa fa-download"></i></a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  
            </>
        );
    }
}