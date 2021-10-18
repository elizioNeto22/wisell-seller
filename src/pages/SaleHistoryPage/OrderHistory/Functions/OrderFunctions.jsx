import React, { useContext } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom'

import {IoBarChartOutline, IoFlashOffOutline, IoCheckmarkDone} from 'react-icons/io5'

const OrderFunctions = () => {

  return (
        <Form className="input-group" action="#">
            <ButtonGroup className="mr-2">
                    <Link to='/sale-page'>
                        <Button type="button" className="btn btn-secondary btn-default btn-sm">
                            <IoFlashOffOutline />{' '}
                            REJEIÇÕES
                        </Button>
                    </Link>
            </ButtonGroup>
            <ButtonGroup className="mr-2">
            <Link to='/recommender'>
                        <Button type="button" className="btn btn-secondary btn-default btn-sm" >
                            <IoBarChartOutline/> {' '}
                            ANALÍTICA
                        </Button>
                    </Link>

            </ButtonGroup>
            <ButtonGroup className="mr-2">
                    <Link to='/offers'>
                        <Button type="button" className="btn btn-secondary btn-default btn-sm align-items-left">
                            <IoCheckmarkDone size='20px'/> {' '}
                            FINALIZAR
                        </Button>
                    </Link>
            </ButtonGroup>
        </Form>
  );
}

export default OrderFunctions;
