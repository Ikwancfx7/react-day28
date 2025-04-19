import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {

  let [umur, setUmur]= useState("");

  const handleChange = (event) => {
    setUmur(event.target.value);
    console.log("Umur diubah jadi:", umur);
  };

  const pesan = () => {
    if (!umur) return "Masukkan umur!"
    return umur<18 ? "Kamu belum cukup umur" : "Selamat Datang!";
  }

  const handleRightClick = () => {
    alert("Klik Kanan")
  }

  // const [isHovered, setIsHovered] = useState(false);
  // const boxStyle = {
  //   width: '250px',
  //   height: '250px',
  //   backgroundColor: isHovered ? '#27ae60' : '#3498db',
  //   color: 'white',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: '12px',
  //   fontSize: '24px',
  //   transition: 'background-color 0.3s ease',
  // };

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  
  return (
    <>
    <h1>Day 28</h1>
    <p>VALIDASI UMUR</p>
    <input 
      type="number" 
      value={umur}
      onChange={handleChange}
    />
  
    <p>{pesan()}</p>

    <div>
      <button onContextMenu={handleRightClick}>Klik di sini</button>
    </div>
    {/* <div style={{padding: '20px'}}>
      <div
        style={boxStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? 'Hello!' : 'Hover over me'}
      </div>
    </div>
     */}

    <div>
      <input 
        type="text"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <input
        type="number"
        placeholder="Harga Produk"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <textarea
        placeholder="Deskripsi Produk"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <ProductCard 
        nama={name}
        price={price}
        description={description} 
      />
    </div>
    </>
  )
}

export default App
