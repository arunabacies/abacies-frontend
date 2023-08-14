
import img08 from '../../assets/images/media/img_08.jpg';
import img09 from '../../assets/images/media/img_09.jpg';
import img10 from '../../assets/images/media/img_10.jpg';
import img11 from '../../assets/images/media/img_11.jpg';

export default function TestimonialImages() {
    return (
        <>
        <img
            src={img08}
            alt=""
            className="shapes avatar-one"
            width={45}
            height={45}
            style={{
            outlineWidth: '6px'
        }}/>
        <img
            src={img09}
            alt=""
            className="shapes avatar-two"
            width={85}
            height={85}
            style={{
            outlineWidth: '10px'
        }}/>
        <img
            src={img10}
            alt=""
            className="shapes avatar-three"
            width={85}
            height={85}
            style={{
            outlineWidth: '10px'
        }}/>
        <img
            src={img11}
            alt=""
            className="shapes avatar-four"
            width={50}
            height={50}
            style={{
            outlineWidth: '5px'
        }}/>
        </>
    )
}