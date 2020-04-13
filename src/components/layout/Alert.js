import React from 'react'

export const Alert = ({ alert }) => { //takes in object, passed as prop
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  )
}
