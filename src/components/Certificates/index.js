import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper, SwiperSlide} from 'swiper/react';

import { CertificatesContainer, CertificatesH1, CertificatesSub } from './CertificatesElements'

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';

import cert1 from '../../allCertificates/cert1.png';
import cert2 from '../../allCertificates/cert2.png';
import cert3 from '../../allCertificates/cert3.png';
import cert4 from '../../allCertificates/cert4.png';
import cert5 from '../../allCertificates/cert5.png';
import cert6 from '../../allCertificates/cert6.png';
import cert7 from '../../allCertificates/cert7.png';
import cert8 from '../../allCertificates/cert8.png';
import cert9 from '../../allCertificates/cert9.png';
import cert10 from '../../allCertificates/cert10.png';
import cert11 from '../../allCertificates/cert11.png';
import cert12 from '../../allCertificates/cert12.png';
import cert13 from '../../allCertificates/cert13.png';
import cert14 from '../../allCertificates/cert14.png';
import cert15 from '../../allCertificates/cert15.png';

SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
    return (
        <CertificatesContainer id="certificates">
            <CertificatesH1>certificates</CertificatesH1>
            <CertificatesSub>online courses</CertificatesSub>
            <Swiper className="pagination-color"
            grabCursor="true"
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
                rotate: 5,
                stretch: 20,
                depth: 75,
                modifier: 6,
                slideShadows: false,
            }}
            pagination={{
                clickable: true, 
                type: "fraction",
            }} >
            
                <SwiperSlide> 
                    <img src={cert1} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert2} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert3} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert4} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert5} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert6} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert7} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert8} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert9} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert10} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert11} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert12} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert13} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert14} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert15} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <br/>
            </Swiper>
        </CertificatesContainer>
    )
}

export default Certificates;