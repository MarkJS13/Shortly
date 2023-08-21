import Input from "./Middle/Input"
import Banners from "./Middle/Banners";
import Shorted_Links from "./Middle/Shorted_Links";
import { useState, useEffect } from "react";
import axios from "axios";


const Middle = (props) => {
    const [input, setInput] = useState('');
    const [links, setLinks] = useState([]);
    const [submittedInput, setSubmittedInput] = useState('');


    const displayModalError = () => {
        props.setShowError(true);
        setTimeout(() => {
            props.setShowError(false);
        }, 2500);
    }


    useEffect(() => {
        if(submittedInput) {
            axios.get(`https://api.shrtco.de/v2/shorten?url=${submittedInput}`).then(res => {     
            setLinks(prevLinks => [...prevLinks, 
                {id: links.length === 0 ? 1 : links[links.length - 1].id + 1 , origLink: submittedInput, shortedLink: res.data.result?.short_link}
            ]);

            }).catch(() => {
                displayModalError()
            });
        }
            
    }, [submittedInput])

    useEffect(() => {
        localStorage.setItem('storedLinks', JSON.stringify(links));
    }, [links])

    useEffect(() => {
        const storedLink = localStorage.getItem('storedLinks');
        if(storedLink) {
            setLinks(JSON.parse(storedLink));
        }
    }, [])


    return (
        <div className="middle">
            <Input input={input} setInput={setInput} submittedInput={submittedInput} setSubmittedInput={setSubmittedInput}/>
            <Shorted_Links links={links}/>
            <Banners/>
        </div>
    )
}

export default Middle;