import React, { useEffect, useState } from 'react'
import './diagnostic.css'
import { behaviorRadioGroups, radioGroups } from './type';
import axios from 'axios';
import { Diagnostic_URL, GETALL_Diagnostic_URL } from '../../hooks/Chat/constant';
import { parseContentIntoSections, parseSections } from '../../Components/Formar_MarkDown/format_MarkDown';
import ReactMarkdown from 'react-markdown';
export default function Diagnostic() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = ['Mô tả hành vi', 'Phân tích', 'Kết quả'];
  const [radioValues, setRadioValues] = useState<{ [key: string]: string }>({});
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogBreed, setDogBreed] = useState("");

  const [behaviorDescription, setBehaviorDescription] = useState('');
  const [solutions, setSolutions] = useState('');

  const [loading, setLoading] = useState(false);
  const [apiResult, setApiResult] = useState(null);
  const [sections, setSections] = useState(null);
  console.log(sections)
  const callApi = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const userId = user.id;
    const content = `
Tên chó: ${dogName} ,
Tuổi: ${dogAge} ,
Giống chó: ${dogBreed} ,
${Object.entries(radioValues)
        .map(([key, value]) => `${key}: ${value}`)
        .join(' ,')}
Mô tả hành vi: ${behaviorDescription} ,
Bạn đã thử giải pháp nào chưa: ${solutions}
`.trim();
    const formData = {
      userId,
      content
    };

    setLoading(true);
    try {
      const response = await axios.post(Diagnostic_URL, formData);
      const content = response.data?.data.content;
      setApiResult(content);
      const parsedSections = parseSections(content);
      console.log(parsedSections)
      setSections(parsedSections);
    } catch (error) {
      console.error('API call error:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleNext = async () => {
    if (currentTab === 1) {
      await callApi();
    }
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };
  const ResultDisplay = ({ sections }) => {
    if (!sections || Object.keys(sections).length === 0) return null;

    return (
      <div className="tab-content">
        <div className="card">
          <div className="card-header">
            <div className="result-header">
              <span className="success-icon">✔</span>
              <div className="card-title">Kết Quả Phân Tích</div>
            </div>
            <div className="card-description">
              Dựa trên thông tin bạn cung cấp, đây là phân tích và đề xuất của chúng tôi
            </div>
          </div>

          <div className="result-content">
            {Object.entries(sections).map(([title, content]) => (
              <div className="result-section" key={title}>
                <h3 className="result-section-title">{title}</h3>
                <p className="result-text">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </p>
              </div>
            ))}
          </div>

          <div className="result-footer">
            <button className="save-button">Lưu kết quả</button>
            <button className="consult-button">Tham khảo chuyên gia</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="diagnostic-page">
      <div className="diagnostic-container">
        <div className="diagnostic-header">
          <h1 className="diagnostic-title">Công Cụ Chẩn Đoán Hành Vi Chó</h1>
          <p className="diagnostic-subtitle">
            Trả lời các câu hỏi dưới đây để nhận phân tích và giải pháp cho vấn đề hành vi của chó cưng
          </p>
        </div>


        <div className="diagnostic-tabs">
          <div className="tabs-header">
            <div className="tabs-list">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-trigger ${currentTab === index ? 'active' : ''}`}
                  onClick={() => setCurrentTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="tab-content-container">
            {currentTab === 0 && (
              <div className="tab-content">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Thông tin cơ bản về chó của bạn</div>
                    <div className="card-description">Cung cấp thông tin cơ bản để chúng tôi hiểu rõ hơn về chó của bạn</div>
                  </div>
                  <div className="form-content">
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="dog-name">Tên chó</label>
                        <input id="dog-name" className="form-input" placeholder="Tên chó của bạn" value={dogName}
                          onChange={(e) => setDogName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="dog-age">Tuổi</label>
                        <input id="dog-age" className="form-input" placeholder="Tuổi (năm hoặc tháng)" value={dogAge}
                          onChange={(e) => setDogAge(e.target.value)} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="dog-breed">Giống chó</label>
                      <input id="dog-breed" className="form-input" placeholder="Giống chó (nếu biết)" value={dogBreed}
                        onChange={(e) => setDogBreed(e.target.value)} />
                    </div>

                    {radioGroups.map((group) => (
                      <div className="form-group" key={group.name}>
                        <label>{group.label}</label>
                        <div className="radio-group">
                          {group.options.map((opt) => (
                            <label key={opt.value} className="radio-option">
                              <input
                                type="radio"
                                name={group.name}
                                value={opt.value}
                                checked={radioValues[group.name] === opt.value}
                                onChange={() =>
                                  setRadioValues({
                                    ...radioValues,
                                    [group.name]: opt.value,
                                  })
                                }
                              />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="form-footer">
                    <button className="next-button " onClick={handleNext} disabled={currentTab === tabs.length - 1}>
                      Tiếp theo <span className="button-icon">→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {currentTab === 1 && (
              <div className="tab-content">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Mô tả hành vi của chó</div>
                    <div className="card-description">Mô tả chi tiết hành vi bạn đang lo lắng hoặc muốn cải thiện</div>
                  </div>
                  <div className="form-content">
                    {behaviorRadioGroups.map((group) => (
                      <div className="form-group" key={group.name}>
                        <label>{group.label}</label>
                        <div className="radio-group">
                          {group.options.map(({ label, value }) => (
                            <label key={value} className="radio-option">
                              <input
                                type="radio"
                                name={group.name}
                                value={value}
                                checked={radioValues[group.name] === value}
                                onChange={() =>
                                  setRadioValues({ ...radioValues, [group.name]: value })
                                }
                              />
                              {label}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="form-group">
                      <label htmlFor="behavior-description">Mô tả chi tiết hành vi</label>
                      <textarea
                        id="behavior-description"
                        placeholder="..."
                        className="behavior-textarea"
                        value={behaviorDescription}
                        onChange={(e) => setBehaviorDescription(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Bạn đã thử giải pháp nào chưa?</label>
                      <textarea
                        placeholder="..."
                        className="solutions-textarea"
                        value={solutions}
                        onChange={(e) => setSolutions(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-footer-between">
                    <button className="back-button" onClick={() => setCurrentTab(currentTab - 1)}>
                      ← Quay lại
                    </button>
                    <button
                      className="analyze-button"
                      onClick={handleNext}
                      disabled={loading || currentTab === tabs.length - 1}
                    >
                      {loading ? 'Đang phân tích...' : 'Phân tích →'}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {currentTab === 2 && (
              <ResultDisplay sections={sections} />
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
