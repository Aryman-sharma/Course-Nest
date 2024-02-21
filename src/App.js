import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { apiUrl , filterData} from './data';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect,useState } from 'react';
import { toast } from "react-toastify";
import Spinner from './components/Spinner';
function App() {
  
const [courses , setCourses] = useState(null);
const [loading,setLoading]=useState(true);
const[category,setCategory]=useState(filterData[0].title);
const fetchData = async() =>
{  
   setLoading(true);
  try{
      let response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);

  }
  catch(error){
    toast.error("something went wrong");
  }
  setLoading(false);
}


useEffect( () => 
{ 
 fetchData();
},[]);  

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
     
     <div><Navbar/></div>
     
     <div><Filter filterData={filterData} category={category} setCategory={setCategory} /></div>
     
     
     <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {
        loading ? (<Spinner/>): (<Cards courses={courses} category={category}/>)
      }
      
     </div>
     
    </div>
  );
}

export default App;
