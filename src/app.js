import React from 'react';
import './App.css';
import FormApp from './form';
import ImageComp from './image'

class App extends React.Component{
    render(){
        return (
        <>
        <div className="container">
            <div className="row">
                <div className="col col-sm-0 col-md-6 col-lg-6">
                    <ImageComp />
                </div>
                <div className="col col-sm-12 col-md-6 col-lg-6" >
                    <FormApp />
                </div>
            </div>
        </div>
        </>
        )
    } 
 }

 export default App;
        