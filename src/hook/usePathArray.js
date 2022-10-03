import { memo } from "react";

const usePathArray = (path) => {

    const pathArray = path.split('/');

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const newArray = pathArray.map((elem, index) => elem = { title: capitalizeFirstLetter(elem), path: elem });

    newArray.shift()

    return (
        newArray
    )
}

export default usePathArray