import React from 'react'

function Card(props) {
  return (
    <div className='card'>
       <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"></img>
        <h3> {props.title}Her siparişinize bir kampanya </h3>
         <p>{props.content}Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
         </div>
  )
}

export default Card