import { useEffect, useRef } from "react";

export const Color = (color) => {


    useEffect(() => {
        if (color.color) {
            let colorEl = document.querySelector('.color');
            colorEl.style.backgroundColor = color.color
        }
    }, [color.color]);

    const colorValueRef = useRef();

    const colorValueConverter = (ev) => {

        let color = ev.target.innerHTML;
        navigator.clipboard.writeText(color)

        if (color.startsWith("rgb")) {
            // If the input color is in RGB format
            var rgbValues = color.match(/\d+/g); // Extract the RGB values as an array
            var r = parseInt(rgbValues[0]);
            var g = parseInt(rgbValues[1]);
            var b = parseInt(rgbValues[2]);

            // Convert the RGB values to HEX format
            var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

            // Return the HEX color value
            ev.target.innerHTML = hex;


        } else {
            // If the input color is in HEX format
            var hexValues = color.match(/[A-Za-z0-9]{2}/g); // Extract the HEX values as an array
            var r = parseInt(hexValues[0], 16);
            var g = parseInt(hexValues[1], 16);
            var b = parseInt(hexValues[2], 16);

            // Convert the HEX values to RGB format
            var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

            // Return the RGB color value
            ev.target.innerHTML = rgb;
        }
    }

    return <section className="color">
        <div className="main-layout">
            <h1 onClick={(event) => colorValueConverter(event)} ref={colorValueRef}>{color.color}</h1>
        </div>
    </section>
}