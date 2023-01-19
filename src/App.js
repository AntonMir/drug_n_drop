import { useEffect, useRef, useState } from 'react'
import './App.css';
import styled from 'styled-components';


const height = 150
const width = 150




function App() {

    // const blockRef = useRef()

    // const [cursorInButtonPosition, setCursorInButtonPosition] = useState({ top: 0, left: 0 })
    const [position, setPosition] = useState({ top: 10, left: 10 })
    const [pressed, setPressed] = useState(false)

    // const onMouseMove = e => setCursorPosition({ top: e.movementY, left: e.movementX });

    // window.onmousemove = (event) => {
    //     setCursorPosition({ top: event.pageY, left: event.pageX });
    // }


    // window.addEventListener('mousemove', event => {
    //     setPosition({ top: event.pageY, left: event.pageX })
    // })

    // useEffect(()=> {
    //     // console.log('mousePosition', mousePosition)

    //     const current = blockRef.current

    //     const onMouseDown = () => {
    //         current.style.top = cursorPosition.top - height/2
    //         current.style.left = cursorPosition.left - height/2
    //     }

    //     // console.log('current', current)
    // }, [cursorPosition])

    const handleMouseMove = (event) => {
        if (pressed) {
            setPosition({
                left: position.left + event.movementX,
                top: position.top + event.movementY
            })
        }
    }


    // // при зажатии мышки на блоке
    // const onMouseDown = (event) => {
    //     setCursorInButtonPosition({ 
    //         top: event.nativeEvent.clientY - event.target.offsetTop, 
    //         left: event.nativeEvent.clientX - event.target.offsetLeft
    //     })
    //     console.log('press true')
    //     setPressed(true)
    //     // event.target.style.margin = '200px'
    // }

    // const onMouseUp = () => {
    //     console.log('press false')
    //     setPressed(false)
    // }

    // const onMouseLeave = () => {
    //     console.log('press false')
    //     setPressed(false)
    // }


    // const onMouseMove = (event) => {
    //     // console.log('event', event.nativeEvent)
    //     // console.log('Y', cursorPosition.top - event.nativeEvent.clientY)
    //     // console.log('X', event.nativeEvent.pageX - event.nativeEvent.clientX)
    //     // console.log('Y', cursorPosition.top, event.nativeEvent.clientY)
    //     // console.log('X', cursorPosition.left, event.nativeEvent.clientX)
    //     if(pressed) {
    //         event.target.style.top = `${position.top - cursorInButtonPosition.top}px`
    //         event.target.style.left = `${position.left - cursorInButtonPosition.left}px`
    //     }

    // }

    // useEffect(() => {
    //     console.log('cursorInButtonPosition', cursorInButtonPosition)
    // }, [cursorInButtonPosition])

    return (
        <Wrapper>
            <Block 
                // name='block'
                // ref={blockRef}
                onMouseDown={() => setPressed(true)} 
                onMouseMove={handleMouseMove} 
                onMouseUp={() => setPressed(false)}
                onMouseLeave={() => setPressed(false)}
                position={position}
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

const Block = styled.div.attrs(props => ({
    style: {
        top: props.position.top + 'px',
        left: props.position.left + 'px',
    }
}))`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    background-color: red;
    border: 3px black solid;
`

export default App;
