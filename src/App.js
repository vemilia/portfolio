import React from 'react';
import laddaned from './laddaned.jpeg';
import museum from './nav.png';
import './App.css';
function App(){
 
  return (
      <header className="App-header">
        <h3 className="App-h3">
            Emilia Vestlund
        </h3>
        <div style={{paddingLeft: '5rem', paddingRight: '5rem', align: 'center'}}>
          <p style ={{display: 'inline', float:'right'}}> <img width="750 px" className="App-img" src={laddaned} /></p>
        
       <h1 className="App-h1" style={{paddingRight: '50px'}}>
         User Experience Designer
         </h1> 
         <p className="App-p">
           Currently at Chalmers 
           <br></br>
           Interaction Design & Technologies</p>
           </div>


           <h3 className="App-h3">
            Portofolio
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
          <p style ={{display: 'inline', float:'right'}}> <img width="600 px" className="App-img" src={museum} /></p>
        
       <h1 className="App-h2" style={{paddingRight: '30px'}}>
         #Museumgroupie
         </h1> 
         <p className="App-p" style={{paddingRight: '30px'}}>
         An application which encourages documentation through photography at Universeum. Furthermore, the application aimed to support social interaction and enable sharing of the photographs. The project was carried out in collaboration with Museum 2020. The application was developed for Universeum, a museum and science centre in Gothenburg, Sweden. 
           </p>
           </div>


   
   <div className="App-footer">
       <a className="App-a" rel="noopener" typography="LinkAlpha"
         data-ux="Link" target="_blank" data-aid="FOOTER_LINKEDIN_LINK" aria-label="LinkedIn"
          href="https://www.linkedin.com/in/emilia-vestlund-2b7389139/" data-tccl="ux2.FOOTER.footer3.Layout.Default.Link.Default.805.click,click"><svg viewBox="0 0 24 24"  width="24px" height="24px" data-ux="Icon" class="x-el x-el-svg c1-1 c1-2 c1-2y c1-2b c1-81 c1-82 c1-b c1-c c1-83 c1-84 c1-85 c1-86 c1-d c1-e c1-f c1-g x-d-ux"><path d="M12 2c5.523 0 10 4.476 10 10 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8.675 17.019V9.447h-2.67v7.572h2.67zM7.34 8.759c.737 0 1.335-.627 1.335-1.384 0-.756-.598-1.37-1.335-1.37s-1.335.614-1.335 1.37c0 .757.598 1.383 1.335 1.383zm10.68 8.26V12.96c0-1.985-.478-3.514-3.078-3.514-1.25 0-2.089.612-2.432 1.193h-.036V9.632H10.01v7.387h2.567V13.36c0-.963.204-1.894 1.54-1.894 1.317 0 1.336 1.099 1.336 1.956v3.596h2.567z"></path></svg></a>
      <p className="App-p1">emiliavestlund@hotmail.com</p>
      </div>
        </header>
  
  );
}

export default App;
