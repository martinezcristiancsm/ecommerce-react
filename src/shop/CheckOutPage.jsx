import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const CheckOutPage = () => {
    const [show,setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose =() => setShow(false);



  return (
    <div className='modalCard'>
        <Button variant="warning" className='py-2' onClick={handleShow}>Finalizar compra</Button>

        <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal fade'
        centered
        >
            <div className='modal-dialog'>
                <h5 className='px-3 mb-3'>Como quieres pagar?</h5>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className="tabs mt-3">
                            <ul className='nav nav-tabs' id="myTab" role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} href="#visa"><img src="https://i.imgur.com/sB4jftM.png" alt="" width="80"/></a>
                                </li>
                            </ul>

                            <div className="tab-cont" id='myTabContent'>
                                <div className={`tab-pane fade ${activeTab ==="visa" ? "show actuve" : ""}`}
                                id='visa'
                                role='tabpanel'
                                aria-labelledby='visa-tab'
                                >
                                
                                <div className='mt-4 mx-4'>
                                    <div className='text-center'>
                                        <h5>Tarjeta de crédito/débito</h5>
                                    </div>
                                    <div className='form mt-3'>
                                        <div className='inputbox'>
                                            <input type="text" name="name" id="name" className='form-control' required/>
                                            <span>Titular de la tarjeta</span>
                                        </div>
                                        <div className='inputbox'>
                                            <input type="text" name="number" id="number" min="1" max="16" className='form-control' required/>
                                            <span>Nº de la tarjeta</span> <i className='fa fa-eye'></i>
                                        </div>
                                        <div className='d-flex flex-row'>
                                        <div className='inputbox'>
                                            <input type="text" name="number" id="number" min="4" max="4" className='form-control' required/>
                                            <span>Vencimiento</span>
                                        </div>
                                        <div className='inputbox'>
                                            <input type="text" name="number" id="number" min="4" max="4" className='form-control' required/>
                                            <span>CVV</span>
                                        </div>
                                        <div className='px-5 pay'>
                                            <button className='btn-success btn-lock'>COMPRAR</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckOutPage
