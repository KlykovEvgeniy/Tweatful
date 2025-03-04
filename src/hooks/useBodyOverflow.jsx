import {useEffect} from "react";

export const useBodyOverflow = (isOpen) => {
    useEffect(() => {
        const styles = document.body.style
        if(isOpen) {
            styles.overflowY = "hidden";
        }else {
            styles.overflowY = "visible"
        }
    }, [isOpen]);
}
