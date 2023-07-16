import React from 'react'

function UserDetails({a}) {
  return (
    <div>
    {a.map((item, index) => {
      return (
        <div key={index}>
          <span>Name: {item?.name}</span>
          <span>Email: {item.email}</span>
          <span>password: {item.password}</span>
        </div>
      );
    })}
  </div>
  )
}

export default UserDetails