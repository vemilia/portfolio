import React, { Component } from 'react'
import museum from './nav.png';
import mobil from './mobilapp.png';
import frame from './frame3.png';
import die from './digitaldie1.png'
import calender from './calender.jpg'
import app3 from './app3.png'

export default class Work extends Component {
  render() {
  return (
     
    <header className="App-header">
           <h3 className="App-h3">
            Portfolio
        </h3>
           <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'left'}}> <img width="600 px" className="App-img" src={museum} /></p>
        
       <h1 className="App-h2" style={{paddingLeft: '30px'}}>
         #Museumgroupie
         </h1> 
         <p className="App-p" style={{paddingLeft: '30px'}}>
         An application which encourages documentation through photography at Universeum. Furthermore, the application aimed to support social interaction and enable sharing of the photographs. The project was carried out in collaboration with Museum 2020. The application was developed for Universeum, a museum and science centre in Gothenburg, Sweden. 
           </p>
           </div>


           <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'right'}}> <img width="600 px" className="App-img" src={mobil} /></p>
        
       <h1 className="App-h2" style={{paddingRight: '30px'}}>
         City workout
         </h1> 
         <p className="App-p" style={{paddingRight: '30px'}}>
         An application that gives the
user proposed exercises, based on their location, to do
in their daily life. It can be for example on the bus, in the park or in
the store. 
         </p>
           </div>



           <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'left'}}> <img width="600 px" className="App-img" src={frame} /></p>
        
       <h1 className="App-h2" style={{paddingLeft: '30px'}}>
         GRABITY
         </h1> 
         <p className="App-p" style={{paddingLeft: '30px'}}>
         An interactive and explorative game where the players experience the gravitational force at Mars.
           </p>
           </div>


           <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'right'}}> <img width="600 px" className="App-img" src={die} /></p>
        
       <h1 className="App-h2" style={{paddingRight: '30px'}}>
         Digital die
         </h1> 
         <p className="App-p" style={{paddingRight: '30px'}}>
         A new version of a die. A digital die with corresponding application that could interact and customize the app to have different numbers and amount of numbers on the die.
         </p>
           </div>


           <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'left'}}> <img width="600 px" className="App-img" src={calender} /></p>
        
       <h1 className="App-h2" style={{paddingLeft: '30px'}}>
         Time booking application
         </h1> 
         <p className="App-p" style={{paddingLeft: '30px'}}>
         An desktop application for schedulging and managing bookings for rooms, lecture halls and houses for teachers at an university.  </p>
           </div>


           <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'right'}}> <img width="600 px" className="App-img" src={app3} /></p>
        
       <h1 className="App-h2" style={{paddingRight: '30px'}}>
         Leasing application
         </h1> 
         <p className="App-p" style={{paddingRight: '30px'}}>
          An android application for renting out familys unutilized stuff. For example childrens toys, scotters, clothes. 
           </p>
           </div>
  
  </header>
  );
}
}
