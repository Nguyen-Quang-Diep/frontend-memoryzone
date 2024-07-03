import React from 'react'
import '../Css/HeaderMain.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import slider1 from '../../../assets/slider1_1.jpg'
import slider2 from '../../../assets/slider1_2.jpg'
import slider3 from '../../../assets/slider1_4.jpg'
import bottomBanner1 from '../../../assets/bottom_banner_1.jpg'
import bottomBanner2 from '../../../assets/bottom_banner_2.jpg'
import bottomBanner3 from '../../../assets/bottom_banner_3.jpg'
function HeaderMain() {
  return (
    <div className='master'>
        <div className='container d-flex'>
          <ul className='row d-flex col-3 list-unstyled border rounded pb-5'>
             <li className="list__main p-2 border"><a href="/chuot-ban-phim" className="cart__main ms-5">Chuot-Ban-Phim-Tai-Nghe</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/laptop-handheld" className="cart__main ms-5">Laptop-Handheld</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/pc-may-tinh" className="cart__main ms-5">PC/May-Bo</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/man-hinh-Loa" className="cart__main ms-5">Man-Hinh/Loa</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/linh-kien-pc" className="cart__main ms-5">Linh-Kien-PC/Laptop</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/lifestyle" className="cart__main ms-5">LifeStyle-LiveStream-Setup</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/ssd-gan-trong" className="cart__main ms-5">SSD-Gan-Trong</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/ram-laptop-pc" className="cart__main ms-5">Ram-Laptop-PC</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/the-nho" className="cart__main ms-5">The Nho</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/o-cung-ssd-di-dong" className="cart__main ms-5">O Cung SSD di dong</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/o-cung-hdd-di-dong" className="cart__main ms-5">O Cung HDD di dong</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/usb" className="cart__main ms-5">USB</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/hdd" className="cart__main ms-5">HDD</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/giai-phap-nas" className="cart__main ms-5">Giai Phap NAS</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 border"><a href="/phu-kien" className="cart__main ms-5">Phu Kien</a><FontAwesomeIcon icon={faAngleRight}/></li>
             <li className="list__main p-2 "><a href="/thu-phi-dich-vu" className="cart__main ms-5">Phi Thu Dich Vu</a><FontAwesomeIcon icon={faAngleRight}/></li>
          </ul>
          <div className='col-xl-9 home-banner-group col-12 pl-xl-0'>
             <div className='home-banner-left'>
              <section className='section-slider'>
                <div className='home-slider3 swiper-container gallery-top swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100 active" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={slider2} className="d-block w-100 active" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={slider3} className="d-block w-100 active" alt="..."/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div></div>
              </section>
             </div>
             <div className='sub_banner sub_banner--bottom  d-none d-lg-flex'>
               <a className='sub_banner__item banner' href='#' title='O cung chinh hang'>
                <picture>
                  <img className='img-fluid' src={bottomBanner1} alt="O cung chinh hang" />
                </picture>
               </a>
               <a className='sub_banner__item banner' href="#" title='the nho chinh hang'>
                <picture>
                  <img className='img-fluid' src={bottomBanner2} alt="the nho chinh hang" />
                </picture>
               </a>
               <a className='sub_banner__item banner' href="#" title='Chuot-Ban-Phim-Chinh-Hang'>
                <picture>
                  <img className='img-fluid' src={bottomBanner3} alt="Chuot-Ban-Phim-Chinh-Hang"/>
                </picture>
               </a>
             </div>
          </div>
          
        </div>
    </div>
  )
}

export default HeaderMain