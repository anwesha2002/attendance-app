import {MdArrowDropDown} from "react-icons/md";
import {Dispatch , SetStateAction , useState} from "react";
import {inputModal} from "./createSubjectModal.tsx";


type DropDownProps = {
    items : string[],
    title : string,
    // handleClick : (data : string) => void
    setInput :  Dispatch<SetStateAction<inputModal>>,
    input : inputModal
}

export function DropDown({ items , title, setInput, input} : DropDownProps) {

    const [value , setValue ] = useState(title)

    function handleClick(e : any ){

        console.log(typeof e)
        e.preventDefault()
        // console.log(e.target.textContent)
        if(title === "Section"){
            setInput ( {
                ...input ,
                sec : e.target.textContent
            } )
            setValue(e.target.textContent)
        }
        if(title === "Department"){
            setInput ( {
                ...input ,
                department : e.target.textContent
            } )
            setValue(e.target.textContent)
        }
    }

    console.log(value)

    return (
        <>
            <details className="dropdown">
                <summary  className="btn m-1 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-5 cursor-pointer collapse">
                    { value }
                    <MdArrowDropDown size={22}/>
                </summary>
                <ul onClick={handleClick} className="menu dropdown-content bg-base-100 cursor-pointer rounded-box z-[1] w-52 p-2 shadow ">
                    {items.map(data=>(
                        <li><a style={{textDecoration : "none"}}>{data}</a></li>
                    ))}
                </ul>
            </details>
        </>
    );
}


