import { useEffect, useState } from "react"

const Shorted_Links = (props)  => {
    const [copied, setCopied] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
       
        const copy = (id) => {
            props.links.map(link => {
                if(link.id === id) {
                    navigator.clipboard.writeText(link.shortedLink);
                    setCopied(prevCopied => ([...prevCopied, link.id ]))
                }
            })
        }
        //console.log(copied)

        
    
    return (
        <div className="shorted-links">
                {props.links.map(link => {
                return <div className="link" key={link.id}>
                            <p className="long-link"> {link.origLink} </p>
                            <p className="short-link"> {link.shortedLink} </p>
                            <div className={`copy ${copied.some(num => num === link.id) ? 'copied' : ''}`} onClick={() => {
                                    copy(link.id);
                                }}>
                                    <a> {copied.some(num => num === link.id) ? 'Copied!' : 'Copy'} </a>
                            </div>
                    </div>
                })}
        </div>
    )
}

export default Shorted_Links;