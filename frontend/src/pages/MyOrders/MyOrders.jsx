import React from 'react'
import './MyOrders.css'

const MyOrders = () => {

    const{url,token} = useContext(StoreCOntext); //here we have backend url and aunthentication token
    const [data, serData] = useState([]);  //to store orders data we created a state variable

    const fetchOrders = async()=>{
        const response = await axios.post(url+"/api/order/userOrders",{},{headers:{token}});
        setData (response.data.data);  //setting the data
        //this line of code is optional
        //console.log(response.data.data); //for response check
    }

    useEffect(()=>{
        if(token) //if token is present then only call the function
        fetchOrders();
    },[token]); //calling the function once the component loads

  return (
    <div className='my-orders'> 
    <h2>My Orders</h2>
    <div className="container">
        {data.map((order,index)=>{
            return(
            <div key={ index} className='my=orders-order'>
                <img src={assets.parcel_icon} alt=""/>
                <p> {order.items.map((items,index)=>{
                    
                    
                })} </p>
               
            </div>
            )
            })}
            </div>
    </div>
  )
}

export default MyOrders