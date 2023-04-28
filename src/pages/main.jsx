import { useDispatch, useSelector } from "react-redux"
import { Gallery } from "../components/gallery"
import { Color } from "../components/color"
import { recolor } from "../slices/colorSlice"
import { useEffect } from "react"
import { storageService } from "../services/storage.service"

export const Main = () => {

    const { color } = useSelector((state) => state.color)
    const dispatch = useDispatch()

    useEffect(() => {
        storageService.loadFromStorage('dailyColor') && dispatch(recolor(storageService.loadFromStorage('dailyColor')[0]))

        const hexOptions = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 5, 6, 7, 8, 9]
        const buildHex = () => {
            let hex = '#'
            for (var i = 0; i < 6; i++) {
                hex += hexOptions[Math.floor(Math.random() * hexOptions.length)]
            }
            return hex
        }
        let today = new Date
        if (!storageService.loadFromStorage('dailyColor')) {
            let dailyColor = buildHex()
            dispatch(recolor(dailyColor))
            storageService.saveToStorage('dailyColor', [dailyColor, today.getDay()])
        }
        else if (today.getDay() !== storageService.loadFromStorage('dailyColor')[1]) {
            let dailyColor = buildHex()
            dispatch(recolor(dailyColor))
            storageService.saveToStorage('dailyColor', [dailyColor, today.getDay()])
        }

    }, [dispatch])

    console.log(color);
    return <div className="main">
        <Color color={color} />
        <Gallery dailyColor={color} />
    </div>

}