import React, { Fragment,useState, useEffect } from 'react';
import {  data } from './HotelProfile';
import './Hotel.css';
import Star from './icons';


function Hotel({checkedItems, checkedProperty, checkedFacility}) {
  console.log("get",checkedItems);
  const [isData, setData] = useState(data.fields);
  // useEffect(()=>{
  //   const filterData= (value)=>{
  //     if(value.length == 0){
  //       setData (data.fields);
  //     }else {
  //       let temp1 = [];
  //       value.map((item1)=>{
  //         const temp = data.fields.filter(
  //           (item)=> item?.house?.toLowerCase() === item?.toLowerCase()
  //         );
  //         let temp2 = temp1.concat(temp);
  //         temp1 = temp2;
  //       });
  //       setData(temp1);
  //     }
      
  //   }

  // },[checkedProperty])
  useEffect(()=>{
    var value =[]
    if(
      Object.keys(checkedItems).length > 0
    ){
      const star = Object.entries(checkedItems)
      
      const Val= star.map((item)=>{
        if (item[1]===true){
          return item[0]
        }
      })
      
       data.fields.filter(item=> {
        Val.map((item1)=>{
          console.log("fetch",item1, item.star === item1);
          if ( item.star === item1){
           value.push(item)
          }
        })
      })
      
      console.log("pass",star,Val,value);
    }
    
    
    setData(value)
    
    
  },[checkedItems]);
  useEffect(()=>{
    var value =[]
    if(
      Object.keys(checkedProperty).length > 0
    ){
      const star = Object.entries(checkedProperty)
      
      const Val= star.map((item)=>{
        if (item[1]===true){
          return item[0]
        }
      })
      
       data.fields.filter(item=> {
        Val.map((item1)=>{
          console.log("fetch",item1, item.star === item1);
          if(item1){
            if ( item.house.toLowerCase() === item1.toLowerCase()){
              value.push(item)
             }
          }
         
        })
      })
      console.log("pass",star,Val,value);
    }
    setData(value)
    },[checkedProperty]);
    useEffect(()=>{
      var value =[]
      if(
        Object.keys(checkedFacility).length > 0
      ){
        const star = Object.entries(checkedFacility)
        
        const Val= star.map((item)=>{
          if (item[1]===true){
            return item[0]
          }
        })
        
         data.fields.filter(item=> {
          Val.map((item1)=>{
            console.log("fetch",item1, item.star === item1);
            if(item1){
              if ( item.work.toLowerCase() === item1.toLowerCase()){
                value.push(item)
               }
            }
           
          })
        })
        console.log("pass",star,Val,value);
      }
      setData(value)
      },[checkedFacility]);



  
    return (

        <Fragment className="hotel-wraper">
            {isData.map((item, index)=>{
        return(
          <div className="hotel-box">
          <ul id={index}>
            <li className="name">
              {item.name}
             </li>
             <li>{item.price}</li>
            <li>
            <img src={item.image}className="image" alt="friut"/>
            </li>
            <li className="border">
              {item.work}
             </li>
             <li className="house">
              {item.house}
             </li>
             <li className="des">
              {item.description}
             </li>
             <Star />
          </ul> 
          </div> 
        );
      })} 
    </Fragment>
    );
};

export default Hotel;
