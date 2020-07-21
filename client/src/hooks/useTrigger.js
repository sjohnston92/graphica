import { useState, useEffect, useRef } from "react";
/* DIRECTIONS AND USAGE
The purpose for this hook is to listen for 
changes in a variable, and trigger a callback when
changes stop occurring. The most common application 
is for sending ajax requests when users stop typing.
(Think of self submitting forms)
ex) 
    useTrigger(userInput, 500, () => {
        axios.put(`/api/user_input`, uesrInput)
        .then(console.log)
        .catch(console.log)
    })
////^^ The above callback would fire 500ms after 
////   the user stops changing the userInput.
*/
const useTrigger = (value, delay, callback) => {
    if (!delay || typeof delay !== "number") delay = 500;
    const [timer, setTimer] = useState(null);
    let firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) firstRender.current = false;
        else {
            clearTimeout(timer);
            setTimer(setTimeout(() => {
                callback();
            }, delay));
        }
    }, [value]);
};
export default useTrigger;