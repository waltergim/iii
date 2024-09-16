import React from 'react'

export const Contacto = () => {
  return (
    <div className='container mt-5 mb-10'>
      <div className='row justify-content-center '>
        <div className='col-md-6'> 
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">Ingresa tu nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Juan Perez"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='btn btn-warning'>enviar</button>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
          <div>
            <i className="bi bi-whatsapp mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-instagram mx-2"></i>
            
          </div>
          <div className='text-center mt-3'>  
            <p>Los jacarandaes</p>
            <p>correo@ejemplo.com</p>
            <p>3435149412</p>
          </div>
     
 
        </div>
       
      </div>
    </div>
  )
}
