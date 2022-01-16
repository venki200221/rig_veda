import "./adhyaya.css"
import Navbar from "../../components/navbar/navbar"

function Adhyaya(){
    return(<>
     
     <Navbar />
     
     <div className="heading">
    <h1>Adhyaya</h1>
    </div>

<center>
<div className="One" >

    
    <div class="btn-group-vertical">

    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" className="btn btn-secondary but1">1</button>
    <button type="button" className="btn btn-secondary but1">2</button>
    <button type="button" className="btn btn-secondary but1">3</button>
    <button type="button" className="btn btn-secondary but1">4</button>
    <button type="button" className="btn btn-secondary but1">5</button>
    </div>
    </div>

      
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary but2">6</button>
    <button type="button" className="btn btn-secondary but2">7</button>
    <button type="button" className="btn btn-secondary but2">8</button>
    <button type="button" className="btn btn-secondary but2">9</button>
    <button type="button" className="btn btn-secondary but2">10</button>
    </div>
    </div>
     
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-secondary but3">11</button>
    <button type="button" className="btn btn-secondary but3">12</button>
    <button type="button" className="btn btn-secondary but3">13</button>
    </div>
    </div>

    </div>

    
   

    
    </div>


</center>
    

    </>);


}

export default Adhyaya;