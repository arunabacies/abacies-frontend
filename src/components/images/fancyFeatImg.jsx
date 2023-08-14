
import ils15 from '../../assets/images/assets/ils_15.svg';
import ils15_1 from '../../assets/images/assets/ils_15_1.svg';
import ils15_2 from '../../assets/images/assets/ils_15_3.svg';
import ils15_3 from '../../assets/images/assets/ils_15_3.svg';
import ils15_4 from '../../assets/images/assets/ils_15_4.svg';
import ils15_5 from '../../assets/images/assets/ils_15_5.svg';
import ils15_6 from '../../assets/images/assets/ils_15_6.svg';
import ils15_7 from '../../assets/images/assets/ils_15_7.svg';
import shape47 from '../../assets/images/shape/shape_47.svg';

export default function FancyFeatImages() {
    return (
        <>
        <div className="illustration-holder" data-aos="fade-left">
            <img src={ils15} alt="" className="w-100 main-illustration"/>
            <img src={ils15_1} alt="" className="shapes shape-one"/>
            <img src={ils15_2} alt="" className="shapes shape-two"/>
            <img src={ils15_3} alt="" className="shapes shape-three"/>
            <img src={ils15_4} alt="" className="shapes shape-four"/>
            <img
                src={ils15_5}
                alt=""
                className="shapes shape-five"
                data-aos="fade-down"
                data-aos-delay={200}
                data-aos-duration={2000}/>
            <img
                src={ils15_6}
                alt=""
                className="shapes shape-six"
                data-aos="fade-down"
                data-aos-delay={100}
                data-aos-duration={2000}/>
            <img
                src={ils15_7}
                alt=""
                className="shapes shape-seven"
                data-aos="fade-down"
                data-aos-duration={2000}/>
        </div>
        {/* /.illustration-holder */}
        <div className="shapes oval-one"/>
        <div className="shapes oval-two"/>
        <img src={shape47} alt="" className="shapes bg-shape-two"/>
        </>
    )
}