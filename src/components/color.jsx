import { useEffect} from "react";

export const Color = (color) => {

    useEffect(() => {
        if (color.color) {
            let colorEl = document.querySelector('.color');
            colorEl.style.backgroundColor = color.color
        }
    }, [color.color]);

    return <section className="color full">
        <div className="main-layout">
            <p>PEACE OUT</p>
        </div>
    </section>
}