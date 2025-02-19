import React from 'react'
import imgAnimal1 from '../../Img/ran/rancapnia.jpg'
import imgAnimal2 from '../../Img/ran/ranhomang.jpg'
import imgAnimal3 from '../../Img/ran/ranlucduoido.jpg'
import '../Category/pageRan.css'
import { Link } from 'react-router-dom'

export default function pageRan() {
  return (
    <div className='main'>
      <div className='heading_animal'>Rắn</div>
      <div className='border_animal'></div>
      <div className='category_animal'>
        <div className='details_animal'>
          <Link to='pageRan'>
            <div className='animal_type'>
              <img src={imgAnimal1} alt='' className='animal_img' />
              <div className='animal_describe'>
                <div className='name_animal'>Rắn Cạp Nia</div>
                <div className='animal_seemore'>
                  <div className='seemore'>
                    Rắn cạp nia (thuộc chi Bungarus) là một loài rắn cực độc, phân bố chủ yếu ở khu vực Nam Á và Đông
                    Nam Á, trong đó có Việt Nam.
                  </div>
                  <div className='animal_type_icon'>Xem Thêm....</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to='/detailsRan'>
            <div className='animal_type'>
              <img src={imgAnimal2} alt='' className='animal_img' />
              <div className='animal_describe'>
                <div className='name_animal'>Rắn Hổ Mang</div>
                <div className='animal_seemore'>
                  <div className='seemore'>
                    Rắn hổ mang là một trong những loài rắn độc phổ biến ở Việt Nam, thuộc họ Elapidae. Chúng có nọc độc
                    mạnh, khả năng phồng mang đe dọa kẻ thù, và thường sống gần khu dân cư.
                  </div>
                  <div className='animal_type_icon'>Xem Thêm....</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to='#'>
            <div className='animal_type'>
              <img src={imgAnimal3} alt='' className='animal_img' />
              <div className='animal_describe'>
                <div className='name_animal'>Rắn Lục Đuôi Đỏ</div>
                <div className='animal_seemore'>
                  <div className='seemore'>
                    Rắn Lục Đuôi Đỏ là loài rắn độc thuộc họ rắn lục (Viperidae), thường gặp ở Việt Nam và các nước Đông
                    Nam Á.
                  </div>
                  <div className='animal_type_icon'>Xem Thêm....</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
