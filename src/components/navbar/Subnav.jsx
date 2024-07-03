import React from 'react'
import './css/Subnav.css'
function Subnav() {
  return (
    <div className='subheader'>
        <div className="container">
            <ul className="shop-policises list-unstyled d-flex align-items-center flex-wrap m-0 pe-0">
                <li className="__web-inspector-hide-shortcut__">
                  <a className='link' href="https://memoryzone.com.vn/huong-dan-thanh-toan" title='Thanh Toan'>Thanh Toan</a>
                </li>
                <li className="__web-inspector-hide-shortcut__">
                  <a className='link' href="https://memoryzone.com.vn/huong-dan-tra-gop" title='Tra Gop'>Tra Gop</a>
                </li>
                <li className="__web-inspector-hide-shortcut__">
                  <a className='link' href="/lien-he" title='Lien He'>Lien He</a>
                </li>
                <li className="__web-inspector-hide-shortcut__">
                  <a className='link' href="https://go.mmz.vn/Ho-Tro-Khach-Hang-Web" title='Cham Soc Khach Hang'>Cham Soc Khach hang</a>
                </li>
                <li className="__web-inspector-hide-shortcut__">
                  <a className="link"  href="/tin-tuc" title='Thu Vien'>Thu Vien</a>
                </li>
                <li className="__web-inspector-hide-shortcut__">
                  <a className='link' href="https://tuyendung.sieutoc.com/jobs" title='Tuyen Dung'>Tuyen Dung</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Subnav