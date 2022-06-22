import React, { useEffect ,useRef} from 'react'
import mermaid from "mermaid";
import debounce from 'debounce';
import { v4 as uuidv4 } from 'uuid';
const Mermaid = ({ data}) => {

    const mermaidElement = useRef(null);

    useEffect(() => {
        let x = String(`user-content-${uuidv4()}`)
        if (data) {
            const handleChange = debounce(() => {
                try {
                    mermaid.parse(data);
                    mermaid.render(x, data, function (svgCode) { 
                    mermaidElement.current.innerHTML = svgCode 
                    });
                } catch (err) {
                    console.error(err);
                }
            }, 600, false);
            handleChange()
        }
    },[data])



    return (
        <>
            <div className='user-content-mermaid' ref={mermaidElement}></div>
        </>
    )
}

export default Mermaid