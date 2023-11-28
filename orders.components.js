import {useEffect,useState} from 'react';
 import { getProduct } from "../services/Product.service";



 export function Orders() {

 

 let header = ["id", "name", "quantity","price","actions"];
 const [data,setData]=useState([]) ;
    
 useEffect(()=>{
     getApi();

  function getApi(){
    getProduct().then((res)=>{
         setData(res.data);  
     })
 }
},[]);
 return (
     <div>
         <h1>product</h1>
         <table className="table table-striped table-dark table-hover">
             <thead className='table'>
                 <tr>
                     {


                         header.map((item) => {
                             return (
                                <th>{item}</th>

                                )
                            }
                            )


                        }


                    </tr>
                    </thead>
                <tbody>
                    
                        {
                            data.map((item)=>{
                                return(
                                  
                                <tr>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.price}</td>
                                  
                                

                                  </tr>
                                  
                                 
                              )
                          })


                      }


          


              </tbody>
          </table>

      </div>
  )

                    }