import React from 'react'

export default function Createdby() {
  const currentYear = new Date().getFullYear();
  return (

    <div className="border-t border-gray-800">
      <div className="my-4 text-gray-400 text-sm text-center">
        © {currentYear} create by Karema Hamdy.
      </div>
    </div>
  )
}
