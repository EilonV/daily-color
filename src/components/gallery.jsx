import { useEffect, useRef } from "react";
import { createClient } from 'pexels';
import { changeGallery } from "../slices/colorSlice";
import { useDispatch, useSelector } from "react-redux";

export const Gallery = (dailyColor) => {
    const dispatch = useDispatch()
    const { galleryPics } = useSelector((state) => state.color)

    const client = createClient('GvghfEPVmBVVTHflnWdzSNSFaI9eSeUpsGy16Gh8YYo5aSzxUJy8HVUF');
    const query = 'nature'

    useEffect(() => {
        const color = dailyColor.dailyColor.substring(1)
        let colorEl = document.querySelector('.gallery-wrapper');
        colorEl.style.background = `linear-gradient(180deg, ${dailyColor.dailyColor} 0%, white 100%)`

        client.photos.search({ query, color, per_page: 15 }).then(photos => {
            dispatch(changeGallery(photos))
        });
    }, [dailyColor]);

    // console.log('galleryPics', galleryPics);
    return <section className="gallery-wrapper main-layout">
        <div className="gallery">
            {galleryPics.photos && galleryPics.photos.map((pic) => {
                return <img src={pic.src.large} alt="" />
            })}
        </div>
    </section>
}