import { useState } from "react";
import s from "./style.module.css"
import { Search as SearchIcon } from "react-bootstrap-icons"

export function SearchBar({ onSubmit }) {
    const [value, setValue] = useState("");
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSubmit(e.target.value)
            setValue("")
        }

    }
    function typed(e) {
        setValue(e.target.value)
    }
    return <>
        <SearchIcon size={27} className={s.icon} />
        <input
            onChange={typed}
            onKeyUp={submit}
            type="text"
            className={s.input}
            value={value}
            placeholder="Search your favourite shows" />

    </>
}
