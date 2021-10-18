import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
//import { Form } from "react-bootstrap";
import { AiOutlineSelect } from "react-icons/ai";
import VendasList from "./VendasList/VendasList";
import VendasTop from "./VendasTop/VendasTop";
import { AiOutlineFilter } from "react-icons/ai";


const MonitorSalesPage = () => {
  const [openFilterForm, setOpenFilterForm] = useState(false);
  const [showList, setShowList] = useState(false);

  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Monitor de Pedidos de Venda </h3>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className = "card-body-header" style={{display: "flex", alignItems: 'center',}}>
                <h4 className="card-title">Pedidos de Venda</h4>
                <Button
                  variant="outline-dark"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setOpenFilterForm(true);
                    setShowList(true);
                    console.log("Clicou");
                  }}
                >
                  <AiOutlineFilter style={{ fontSize: "24px" }} />
                  Filtro
                </Button>
              </div>
              <form className="forms-sample">
                <VendasTop />
                <VendasList />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitorSalesPage;
