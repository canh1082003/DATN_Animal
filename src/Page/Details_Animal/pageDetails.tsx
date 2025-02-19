import React from 'react'
import imgAnimal2 from '../../Img/ran/ranhomang.jpg'
import '../Details_Animal/pageDetails.css'
export default function pageDetails() {
  return (
    <div className='container'>
      <div className='header_animal'>
        <div className='name_animal fw_600'>Rắn Hổ Mang</div>
        <div className='img_main'>
          <img src={imgAnimal2} alt='' className='imgMain_animal' />
          <div className='small_animal'>
            <img src={imgAnimal2} alt='' className='secondary_image' />
            <img src={imgAnimal2} alt='' className='secondary_image' />
            <img src={imgAnimal2} alt='' className='secondary_image' />
            <img src={imgAnimal2} alt='' className='secondary_image' />
          </div>
        </div>
      </div>
      <div className='Describe_animal'>
        <div className='block padding_7 fw_600'>
          Hình Dạng:
          <span>Đầu to, tròn, có thể bạnh mang khi bị đe dọa.</span>
        </div>
        <div className='block padding_7 fw_600'>
          Mắt tròn
          <span>có đồng tử đen hình tròn.</span>
        </div>
        <div className='block padding_7 fw_600'>
          Size:
          <span>1,2 - 2m</span>
        </div>
        <div className='block padding_7 fw_600'>
          Màu Sắc:
          <span>Màu xám, nâu hoặc đen, có hoa văn mờ trên lưng.</span>
        </div>
      </div>
      <div className='Living_environment'>
        <div className='block padding_7 fw_600'>
          Thường gặp ở:
          <span>Đồng bằng, rừng núi, ven sông suối, đồi cỏ</span>
          <span>Trang trại, ruộng lúa, vườn cây gần khu dân cư</span>
          <span>Thường ẩn nấp trong hang, gốc cây, bụi rậm, hoặc tổ chuột, rắn khác</span>
          <div className='Mainly '>Hoạt động chủ yếu vào ban ngày và chập tối, có thể bò vào nhà tìm kiếm thức ăn.</div>
        </div>
      </div>
      <div className='Venom_and_danger_level'>
        <div className='block padding_7 fw_600'>
          Nọc độc của rắn hổ mang có chứa
          <span>Độc tố thần kinh (Neurotoxin): Gây tê liệt, suy hô hấp.</span>
          <span>Độc tố hoại tử (Cytotoxin): Phá hủy mô, gây hoại tử nghiêm trọng.</span>
        </div>
        <div className='block padding_7 fw_600'>
          Triệu chứng khi bị cắn:
          <span>Đau nhức, sưng tấy, chảy máu nhiều</span>
          <span>Tê liệt, khó thở, buồn nôn, co giật</span>
          <span>Trường hợp nặng có thể tử vong do suy hô hấp hoặc sốc phản vệ</span>
        </div>
        <div className='block padding_7 fw_600'>
          Mô Tả
          <span>
            Rắn hổ mang là một trong những loài rắn độc phổ biến ở Việt Nam, thuộc họ Elapidae. Chúng có nọc độc mạnh,
            khả năng phồng mang đe dọa kẻ thù, và thường sống gần khu dân cư.
          </span>
        </div>
        <div className='danger_level fw_600'>Rắn hổ mang cắn rất nguy hiểm, cần cấp cứu ngay!</div>
      </div>
    </div>
  )
}
