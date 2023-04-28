import { useDispatch, useSelector } from "react-redux"
import { Gallery } from "../components/gallery"
import { Color } from "../components/color"
import { recolor } from "../slices/colorSlice"
import { useEffect } from "react"

export const Main = () => {

    const { color } = useSelector((state) => state.color)
    const dispatch = useDispatch()
    const hexOptions = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 5, 6, 7, 8, 9]

    useEffect(() => {
        let dailyColor = buildHex()
        dispatch(recolor(dailyColor))
        console.log('test');
    }, []);

    const buildHex = () => {
        let hex = '#'
        for (var i = 0; i < 6; i++) {
            hex += hexOptions[Math.floor(Math.random() * hexOptions.length)]
        }
        return hex
    }

    return <div className="main">
        <Color color={color} />
        <Gallery dailyColor={color} />
    </div>

}