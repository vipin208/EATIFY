
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { DLT } from '../redux/actions/action';
import { ADD ,REMOVE} from '../redux/actions/action';

const CardsDetails = () => {
  const[data,setData]=useState([]);

  const{id} = useParams();
  console.log(id)

  const history = useNavigate();

  const dispatch=useDispatch();

  const getdata=useSelector((state)=>state.cartreducer.carts);

  const compare =()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }
  

  //add data on increment
  const send=(e)=>{
    dispatch(ADD(e));
  }
  //delete data on decrement
  const remove=(item)=>{
    dispatch(REMOVE(item))
  }

  
  const dlt=(id)=>{
    dispatch(DLT(id));
     history("/");
  }
  useEffect(()=>{
    compare();
  },[id])

 
  return (
    <>
    <div className='container mt-3'>
     <h2 className='text-center'>Items Detail page</h2>
     <section className='container mt-3'>
      <div className='iteamsdetails'>
        {
          data.map((ele)=>{
            return (
              <>
               <div className='items_img'>
               <img src={ele.imgdata} alt=''></img>
               </div>
          <div className="details">
        <Table>
          <tr>
            <td>
              <p> <strong> Restaurant : </strong>{ele.rname} </p>
              <p> <strong> Price : </strong>₹{ele.price}  </p>
              <p> <strong> Dishes : </strong>{ele.address} </p>
              <p> <strong> total : </strong>₹ {ele.price *ele.qnty}</p>
              <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id):()=> remove(ele)} >-</span>
                <span style={{fontSize:22}}>{ele.qnty}</span>
                <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
              </div>
            </td>
            <td>
              <p><strong>Rating : </strong><span style={{background:"green",color:"#fff", padding:" 2px 5px",borderRadius:"5px"}}>{ele.rating} ★ </span></p>
              <p><strong>Order Review : </strong><span >{ele.somedata}</span></p>
              <p ><strong>Remove : </strong><span style={{color:"red", fontSize:20,cursor:"pointer"}}><i className='fas fa-trash' onClick={()=>dlt(ele.id)}></i> </span></p>
            </td>
          </tr>
        </Table>
        </div>

              </>
            )
          })
        }
           <p> <strong> Price : </strong>₹300 </p>
        
        
       
      </div>

     </section>
    </div>
    </>
  )
}

export default CardsDetails
