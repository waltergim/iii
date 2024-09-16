import { useNavigate } from "react-router-dom";
import contenido from "../img/WhatsApp Image 2024-09-09 at 20.43.21.jpeg";

export const Content = () => {
  const navigate = useNavigate();

  const OnBoton  = () => {
    navigate("/Nosotros");
    }


  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">¿Quiénes Somos?</h1>
        <div className="d-flex row">
          <p>
            En Imaginación de Impresiones, convertimos tus ideas en realidad
            visual. Somos una empresa especializada en la creación de lonas,
            impresiones, y una amplia gama de productos gráficos diseñados para
            impulsar la visibilidad y presencia de negocios.
          </p>
          <button
            type="button"
            className="btn btn-warning mx-auto"
            style={{ width: "25%" }}
            onClick={OnBoton}
          >
            Mas info
          </button>
        </div>

        <div className="mt-5 ">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={contenido} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={contenido} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={contenido} className="d-block w-100" alt="Slide 3" />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-5">Alguno de nuestros trabajos</h2>

        <div className="container text-center mb-5">
          <div className="row row-cols-2 m-2">
            <div className="col">
              <div className="card text-bg-dark  ">
                <img src={contenido} className="card-img " alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card text-bg-dark ">
                <img src={contenido} className="card-img " alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card text-bg-dark mt-2">
                <img src={contenido} className="card-img " alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card text-bg-dark mt-2">
                <img src={contenido} className="card-img " alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
