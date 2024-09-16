import logo from "../img/WhatsApp Image 2024-09-09 at 20.42.36.jpeg";
import letras from '../img/letras.jpeg'
import serigrafia from '../img/seragrafia.jpeg'
import dtf from '../img/dtf.jpeg'
import { useNavigate } from "react-router-dom";



export const Nosotros = () => {

  const  navigate = useNavigate();

  
  const handleNavigate = () => {
    navigate('/Trabajos')
    }


  return (
    <>
      <div className="container mt-5 text-center">
        <h1 className="mb-5"> Nuestra Misión</h1>

        <div className="d-flex m-5">
          <p>
            En Imaginación de Impresiones, nuestra misión es transformar cada
            concepto visual en un producto tangible y de alta calidad. Nos
            esforzamos por brindar soluciones gráficas innovadoras que superen
            las expectativas de nuestros clientes, ayudando a que sus marcas se
            destaquen y conecten con su audiencia de manera efectiva.
          </p>

          <div className="ms-5 ">
            <img
              className="rounded-start-pill "
              width={420}
              src={logo}
              alt=""
            />
          </div>
        </div>

        <h2 className="mt-5">Nuestros Servicios</h2>
        <h5>
          Ofrecemos una amplia gama de productos gráficos personalizados,
          incluyendo:
        </h5>
        <div>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="card mt-5" style={{ width: "18rem" }}>
                  <img src={letras} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Letras corporeas</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mt-5" style={{ width: "18rem" }}>
                  <img src={dtf} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Impresiones dtf textil</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mt-5" style={{ width: "18rem" }}>
                  <img src={serigrafia} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">Serigrafia</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
         
        </div>
        <button onClick={handleNavigate} type="button" className="btn btn-warning m-5 px-5">Ver mas</button>
      </div>
    </>
  );
};
