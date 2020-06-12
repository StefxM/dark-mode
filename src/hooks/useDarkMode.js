import React, { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, value) => {
    const [someValue, setSomeValue] = useLocalStorage(key, value);

    const toggle = e => {
        e.preventDefault();
        setSomeValue(!someValue)
    }

    useEffect(() => {
        if (someValue) {
            document.body.classList.toggle('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }

    }, [someValue]);

    return [someValue, toggle]
}

export default useDarkMode; 