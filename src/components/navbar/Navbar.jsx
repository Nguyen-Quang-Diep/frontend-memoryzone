import './css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logoApp from '../../assets/logo.png'
import { useRef } from 'react'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const nameExample = ['ban phim keychron', 'MSI Cyborg 15', 'ASUS OLED','PC Gaming','razer pro click', 'the nho', 'usb', 'Loa']

  const nofollow = useRef('nofollow')
  return (
    <div className='mid-header wid_100 d-flex align-items-center'>
       <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6 col-lg-2 col-xl-3 header-left'>
              <a href="/" title='Memoryzone by Sieu Toc' className='logo-wrapper'>
                <img src={logoApp} alt="logo Memoryzone By Sieu Toc" style={{width: '248px', height: '56px'}}/>
              </a>
            </div>
            <div className='col-lg-6 col-12 header-center pl-lg-0' id='search-header'>
              <form className='ae-search-group'>
                <input type="text" className='ae-search-group__input' required placeholder='Ban can tim gi ?'/>
                <button type='submit' aria-label='search' className='ae-search-group__button'>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
              <div className='search-dropdow'>
                 <ul className='search__list pl-0 d-flex list-unstyled mb-0 flex-wrap'>
                    {nameExample.map((item) => (
                      <li className='me-2'><a href="#">{item}</a></li>
                    ))}
                 </ul>
              </div>
            </div>
            <div className='col-4 col-sm-3 col-lg-6 col-xl-3 pl-0'>
              <ul className='header-right mb-0 list-unstyled d-flex align-items-center'>
                <li className='ml-4 mr-4 mr-md-0 ml-md-3 media d-lg-flex d-none'>
                <FontAwesomeIcon icon={faUser} className='me-1 align-self-center' style={{width: '24px' ,height: '24px'}}/>
                <div className='media-body d-md-flex flex-column d-none'>
                    <a ref={nofollow} href="/account/login" className='d-block' title='tai khoan'>Tai Khoan</a>
                    <small>
                      <a href="/account/login" title='Dang Nhap' className='d-block' style={{fontWeight: 'lighter'}}>Dang Nhap</a>
                    </small>
                </div>
                </li>
                <li className='d-lg-none'>
                  <a href="/sosanh" className='position-relative d-block' title='So sanh san pham'>
                    <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} alt='compare-icon' style={{width: '24px' , height: '24px'}} className='align-self-center'/>
                    <span className='compare-product__header-count position-absolute d-block'>0</span>
                  </a>
                </li>
                <li className='cartgroup ms-3'>
                  <div className='mini-cart text-center text-sm-center'>
                    <a href="/cart" className='img_hover_cart' title='Gio Hang'>
                      <FontAwesomeIcon icon={faCartShopping} style={{width: '24px', height: '24px'}} alt='cart_icon'/>
                      <span className='ms-2 d-xl-block d-none'>Gio hang</span>
                      <span className='count_item count_item_pr'>0</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar