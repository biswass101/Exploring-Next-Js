import React from 'react'

export default async function page({ params } : { params : {id : string} }) {
    const {id} = await params
  return (
    <h1>Product {id}</h1>
  )
}
