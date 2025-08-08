import React from 'react'

const PlaceHolder = ({ width = 'w-full', height = 'h-48', className = '' }) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-md ${width} ${height} ${className}`}
    />
  )
}

export default PlaceHolder
