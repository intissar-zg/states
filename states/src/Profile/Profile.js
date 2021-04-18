import React from 'react'
import PropTypes from 'prop-types'


const Profile = (props) => {
  return (
    <div>
       <h1 style={{color:'purple',fontFamily:'Geneva' , padding:50}}>Full Name:{props.name}</h1>
      <h2 style={{color:'rgb(233, 25, 95)',fontFamily:'arial'}}>Biographie:{props.biographie}</h2>
      <h2 style={{color:'rgb(233, 25, 95)',fontFamily:'arial'}}>Profession:{props.pro}</h2>
      {props.children}
      {/* <button onClick={props.alert}>Clickme</button> */}
    </div>
  )
}

Profile.defaultProps={
  name:"Amina"
}
Profile.prototype={
  name: PropTypes.string,
}
export default Profile
