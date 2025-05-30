import React, { useEffect, useState } from 'react'
import './Training.css'
import { GETALL_TRAINING_URL } from '../../hooks/Training/constant'
import axios from 'axios'
import { categories, Training } from '../../hooks/Training/type'
export default function Training() {
  const [trainingData, setTrainingData] = useState<Training[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(GETALL_TRAINING_URL)
      const data = res.data.data;
      setTrainingData(data)
    }
    fetchData()
  }, [])
  return (
    <div className='training-page'>
      <header className="header-training">
        <div className="container">
          <h1>Hướng Dẫn Huấn Luyện Chó</h1>
          <p>
            Khám phá các phương pháp huấn luyện hiệu quả để xây dựng mối quan hệ
            tốt đẹp với chó cưng của bạn
          </p>
        </div>
      </header>

      {/* Training Methods Section */}
      <section className="training-section">
        <div className="container">
          <div className="training-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${category.id === 'all' ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}

          </div>

          <div className="training-cards">
            {trainingData.map((card, idx) => (
              <div className="training-card" key={idx}>
                <div className="card-image">
                  {card.image}
                  <span className={`difficulty-badge `}>
                    {card.difficulty}
                  </span>
                </div>
                <div className="card-content">
                  <div className="card-duration">⏱️ {card.duration}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <div className="card-progress">
                    <div className="progress-header">
                      <span className="progress-label">Tiến độ</span>
                      <span className="progress-percentage">{card.steps.length} / {card.steps.length}</span>
                    </div>
                    <div className="card-steps">{card.steps.length} bước</div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2 className="section-title">Mẹo Huấn Luyện Hiệu Quả</h2>
          <div className="tips-grid">
            {[
              {
                icon: "⭐",
                title: "Tích cực và kiên nhẫn",
                desc: "Luôn sử dụng phương pháp tích cực với phần thưởng. Tránh la mắng hoặc trừng phạt thể chất. Hãy kiên nhẫn vì mỗi con chó có tốc độ khác nhau.",
              },
              {
                icon: "⏰",
                title: "Thời gian ngắn, thường xuyên",
                desc: "Các buổi huấn luyện nên kéo dài 5-15 phút nhưng thực hiện nhiều lần trong ngày. Điều này giúp chó tập trung tốt hơn và không bị mệt mỏi.",
              },
              {
                icon: "✅",
                title: "Nhất quán trong lệnh",
                desc: "Sử dụng cùng một từ lệnh cho cùng một hành động. Tất cả thành viên trong gia đình nên sử dụng cùng lệnh để tránh làm cho chó bối rối.",
              },
              {
                icon: "🎯",
                title: "Thời điểm phù hợp",
                desc: "Huấn luyện khi chó đang tỉnh táo và có năng lượng, thường là trước bữa ăn. Tránh huấn luyện khi chó mệt mỏi hoặc vừa ăn xong.",
              },
            ].map((tip, idx) => (
              <div className="tip-card" key={idx}>
                <div className="tip-icon">{tip.icon}</div>
                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-description">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="progress-overview">
        <div className="container">
          <h2 className="section-title">Theo Dõi Tiến Độ Của Bạn</h2>
          <div className="overview-grid">
            <div className="progress-stats">
              <h3 className="stats-title">Tổng quan tiến độ</h3>
              <p className="stats-subtitle">Theo dõi quá trình huấn luyện của bạn</p>

              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <div className="stat-label">Bài học đã hoàn thành</div>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <div className="stat-label">Đang thực hiện</div>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12</span>
                  <div className="stat-label">Chưa bắt đầu</div>
                </div>
              </div>

              <div className="overall-progress">
                <div className="overall-label">
                  <span className="progress-label">Tiến độ tổng thể</span>
                  <span className="progress-percentage">45%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "45%" }}></div>
                </div>
                <div style={{ marginTop: 15 }}>
                  <a href="#" className="view-details">
                    Xem chi tiết tiến độ
                  </a>
                </div>
              </div>
            </div>

            <div className="activity-feed">
              <h3 className="stats-title">Hoạt động gần đây</h3>

              {[
                {
                  iconClass: "activity-success",
                  title: "Hoàn thành: Lệnh Ngồi",
                  time: "2 ngày trước",
                },
                {
                  iconClass: "activity-progress",
                  title: "Đang thực hiện: Lệnh Nằm",
                  time: "Hôm nay",
                },
                {
                  iconClass: "activity-start",
                  title: "Bắt đầu: Đi dạo với dây xích",
                  time: "1 tuần trước",
                },
              ].map((item, idx) => (
                <div className="activity-item" key={idx}>
                  <div className={`activity-icon ${item.iconClass}`}></div>
                  <div className="activity-content">
                    <div className="activity-title">{item.title}</div>
                    <div className="activity-time">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
