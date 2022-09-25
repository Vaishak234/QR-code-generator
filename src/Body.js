import React, { useEffect ,useState} from 'react'
import './App.css'
import QRCode from 'qrcode'

function Body() {
    const [input,setInput]= useState('')
    const [src, setSrc] = useState('')
    const [error,setError] = useState(false)

    const getQr=() => {
        if (!input) {
            setError(true)
        }
        QRCode.toDataURL(input).then((data) => {
           setSrc(data)
        })
        
    }
    

  return (
      <div className='body'>
          <div className="body__left">
              <h1>QR code generator</h1>
              <input value={input} onChange={e=>setInput(e.target.value)} className="body__input" type="text" placeholder='https://example.com' />
            {
                 error && <p>Please enter a url to generate QR-Code</p>
               }
             <div className="body__button">
                  <button onClick={getQr}>Generate QR Code</button>
              </div>
              
          </div>
          <div className="body__right">
              <img src={src} />
              {
                  src && <a href={src}  download > <button >Download</button> </a>
              }
          </div>
          
      </div>
      
  )
}

export default Body