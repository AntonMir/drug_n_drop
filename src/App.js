import { useEffect, useRef, useState } from 'react'
import './App.css';
import styled from 'styled-components';


const height = 150
const width = 150




function App() {

    const blockRef = useRef()

    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
    const [cursorInButtonPosition, setCursorInButtonPosition] = useState({ top: 0, left: 0 })
    const [press, setPress] = useState(false)

    // const onMouseMove = e => setCursorPosition({ top: e.movementY, left: e.movementX });

    // window.onmousemove = (event) => {
    //     setCursorPosition({ top: event.pageY, left: event.pageX });
    // }


    window.addEventListener('mousemove', event => {
        setCursorPosition({ top: event.pageY, left: event.pageX })
    })

    // useEffect(()=> {
    //     // console.log('mousePosition', mousePosition)

    //     const current = blockRef.current

    //     const onMouseDown = () => {
    //         current.style.top = cursorPosition.top - height/2
    //         current.style.left = cursorPosition.left - height/2
    //     }

    //     // console.log('current', current)
    // }, [cursorPosition])

    const onMouseDown = (event) => {
        setCursorInButtonPosition({ top: event.nativeEvent.clientY, left: event.nativeEvent.clientX })
        console.log('press true')
        setPress(true)
        // event.target.style.margin = '50px'
    }

    const onMouseUp = () => {
        console.log('press false')
        setPress(false)
    }

    const onMouseMove = (event) => {
        // console.log('event', event.nativeEvent)
        // console.log('Y', cursorPosition.top - event.nativeEvent.clientY)
        // console.log('X', event.nativeEvent.pageX - event.nativeEvent.clientX)
        console.log('Y', cursorPosition.top, event.nativeEvent.clientY)
        console.log('X', cursorPosition.left, event.nativeEvent.clientX)
        if(press) {
            event.target.style.top = `${cursorPosition.top - cursorInButtonPosition.top}px`
            event.target.style.left = `${cursorPosition.left - cursorInButtonPosition.left}px`
        }

    }

    useEffect(() => {
        // console.log('cursorPosition', cursorPosition)
    }, [cursorPosition])

    return (
        <Wrapper>
            <Block 
                // ref={blockRef}
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            >
            </Block>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: calc(100% - 4px);
    height: 2000px;
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
