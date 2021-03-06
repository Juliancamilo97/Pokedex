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
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </SplitButton>
            </InputGroup>
            </>
        </div>
    )
}


