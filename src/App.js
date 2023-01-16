import { useEffect, useRef, useState } from 'react'
import './App.css';
import styled from 'styled-components';


const height = 150
const width = 150


function App() {

    const blockRef = useRef()

    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })

    // const onMouseMove = e => setCursorPosition({ top: e.movementY, left: e.movementX });

    window.onmousemove = (event) => {
        setCursorPosition({ top: event.pageY, left: event.pageX });
    }

    // useEffect(()=> {
    //     // console.log('mousePosition', mousePosition)

    //     const current = blockRef.current

    //     current.style.left += mousePosition.x
    //     current.style.top += mousePosition.y

    //     // console.log('current', current)
    // }, [mousePosition])

    useEffect(() => {
        console.log('cursorPosition', cursorPosition)
    }, [cursorPosition])

    return (
        <Wrapper>
            <Block style={{...cursorPosition }}
                // ref={blockRef}
            ></Block>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid black;
`

const Block = styled.div`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    background-color: red;
    border: 3px black solid;
`

export default App;
