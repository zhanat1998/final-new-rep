import { useEffect, useState } from 'react';
import { search } from '../../store/shop/slice';
import { useAppDispatch } from '../../hook';
import s from './style.module.scss'

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const [inputText, setInputText] = useState("");
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    useEffect(() => {
        dispatch(search(inputText))
    }, [inputText])
    return (
        <div>
            <input className={s.searchInput} type="text" placeholder='Введите поисковик' value={inputText} onChange={inputHandler} />
        </div>
    )
}
export default SearchBar;