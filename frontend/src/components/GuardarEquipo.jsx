import React from 'react'
import { InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap'; 

export default function GuardarEquipo() {

    return (
        <div>
            <>

            <InputGroup className="mb-3">
                <FormControl aria-label="Text input with dropdown button" />
                <SplitButton
                variant="outline-secondary"
                title="Action"
                id="segmented-button-dropdown-2"
                alignRight
                >
                    <Dropdown.Item href="#">Nombre</Dropdown.Item>
                    <Dropdown.Item href="#">Id</Dropdown.Item>
                    <Dropdown.Item href="#">Tipo</Dropdown.Item>                
                </SplitButton>
            </InputGroup>
            </>
        </div>
    )
}


