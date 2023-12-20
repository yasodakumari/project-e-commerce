import Input from "../../components/Input";
import './colors.css';

 function Colors({handleChange}) {
  return (
  <div>
 <h2 className="sidebar-title color-title">Colors</h2>
 <label className="sidebar-label-container">
 <input onChange={handleChange} type="radio" value="" name="test2"/>
 <span className="checkmark all"></span>All
 </label>

<Input 
  handleChange={handleChange}
  value="black"
  title="Black"
  name="test1"
  color="black"
  />

<Input 
  handleChange={handleChange}
  value="blue"
  title="Blue"
  name="test1"
  color="blue"
 />

 <Input 
  handleChange={handleChange}
  value="red"
  title="Red"
  name="test1"
  color="red"
 />

<Input 
  handleChange={handleChange}
  value="green"
  title="Green"
  name="test1"
  color="green"
/>

<Input 
  handleChange={handleChange}
  value="yellow"
  title="Yellow"
  name="test1"
  color="yellow"
/>

<Input 
  handleChange={handleChange}
  value="purple"
  title="Purple"
  name="test1"
  color="purple"
/>

<Input 
  handleChange={handleChange}
  value="orange"
  title="Orange"
  name="test1"
  color="orange"
/>

<Input 
  handleChange={handleChange}
  value="pink"
  title="Pink"
  name="test1"
  color="pink"
/>
<label className="sidebar-label-container"> 
 <input type="radio" onChange={handleChange} value="white" name="test1" />
 <span className="checkmark" style={{background:"white",border:"2px solid black"}}></span>
 White
 </label>


</div>
  );
}

export default  Colors;