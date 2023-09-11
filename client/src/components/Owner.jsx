import React,{useState}from 'react'
import axios from 'axios';

function Owner() {
  return (
      <div>
          <Registerowner />
      </div>
  )
}

const Registerowner = () => {

  const [ownernum, setOwnernum] = useState("");
  const [ownername, setOwnername] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [commodities, setCommodities] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
      try {
          console.log("Entered axuis");
          await axios.post("http://localhost:3001/regVendor", {
              ownernum,
              ownername,
              companyname,
              commodities,
              phonenumber,
              email,
              address,
              pincode,
          });
          alert("Your service has been registered");

      } catch (err) {
          console.error(err);
      }
  }


  return (
    <div className='flex flex-col justify-center h-fit'>
          <form action="" onSubmit={onSubmit} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>OWNER SIGN UP</h2>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="ownernum">Owner ID:</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" name="" id="ownernum" value={ownernum} onChange={(event) => setOwnernum(event.target.value)} />
          </div>
              <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="ownername">Owner Name:</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="" id="ownername" value={ownername} onChange={(event) => setOwnername(event.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="companyname">Company Name:</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="" id="companyname" value={companyname} onChange={(event) => setCompanyname(event.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="commodities">Commodities:</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="" id="commodities" value={commodities} onChange={(event) => setCommodities(event.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="phonenumber">Phone Number:</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" name="" id="phonenumber" value={phonenumber} onChange={(event) => setPhonenumber(event.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="address">Address:</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="" id="address" value={address} onChange={(event) => setAddress(event.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="pincode">Pincode</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" name="" id="pincode" value={pincode} onChange={(event) => setPincode(event.target.value)} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
              <label htmlFor="email">Email</label>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" name="" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
              <button type="submit" className='w-full my-5 py-2 bg-teal-400 shadow-lg shadow-teal-500/100 hover:scale-105 duration-300 text-black'>Register</button>
          </form>

      </div>

  )

}


export default Owner