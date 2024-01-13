import { useState } from 'react';
import { useAppDispatch } from '../../hook';
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

}
const SearchBar = () => {
    const [inputText, setInputText] = useState("");
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={inputHandler} />
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar;