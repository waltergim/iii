import logo from "../img/WhatsApp Image 2024-09-09 at 20.42.36.jpeg";

export const Footeer = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-5 ">Contactanos</h1>

        <div className="container text-center mt-5">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "12rem" }}>
                <img
                  src={logo}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "contain" }}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Puedes ver mas de nuetros trabajos aqui
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              Nuestras redes
              <div className="row">
                <i className="bi bi-whatsapp mt-5">whatsapp</i>
                <i className="bi bi-facebook mt-2">facebook</i>
                <i className="bi bi-instagram mt-2">instagram</i>
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="text-start">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
