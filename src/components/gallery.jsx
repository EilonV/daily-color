import { useEffect } from "react";
import { createClient } from 'pexels';
import { changeGallery } from "../slices/colorSlice";
import { useDispatch, useSelector } from "react-redux";

export const Gallery = (dailyColor) => {
    const dispatch = useDispatch()
    const { galleryPics } = useSelector((state) => state.color)
    // const btnRef = useRef()

    let prevPicClick = ''

    useEffect(() => {
        const client = createClient('GvghfEPVmBVVTHflnWdzSNSFaI9eSeUpsGy16Gh8YYo5aSzxUJy8HVUF');
        const options = ['color', 'nature', 'abstract', 'texture', 'pattern', 'space', 'technology', 'flowers', 'sky']
        const query = options[Math.floor(Math.random() * options.length)]
        const color = dailyColor.dailyColor.substring(1)
        let colorEl = document.querySelector('.gallery-wrapper');
        colorEl.style.background = `linear-gradient(180deg, ${dailyColor.dailyColor} 0%, white 100%)`
        if (dailyColor.dailyColor !== '') {
            client.photos.search({ query, color, per_page: 15 }).then(photos => {
                dispatch(changeGallery(photos))
            });
        }

    }, [dailyColor.dailyColor, dispatch]);

    const enlarge = (pic) => {
        if (prevPicClick) {
            prevPicClick.classList.remove('active')
        }
        let currPic = document.querySelector('.pic' + pic.id)
        currPic.classList.add('active')
        prevPicClick = currPic

    }

    return <section className="gallery-wrapper main-layout">
        <div className="gallery">
            {galleryPics.photos && galleryPics.photos.map((pic) => {
                return <div className="pic-wrapper" key={pic.id}>
                    <div className="pic">
                        <img src={pic.src.large} className={'pic '.concat('pic', pic.id)} alt="" onClick={(event) => enlarge(pic)} />
                    </div>
                </div>
            })}
        </div>
    </section>
}