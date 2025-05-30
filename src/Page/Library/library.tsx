import { Search } from "lucide-react";
import "../Library/library.css"
import { use, useEffect, useState } from "react";
import axios from "axios";
import { GET_Library_BYID, GET_Library_BYTYPE, GETALL_Library_URL } from "../../hooks/Library/constant";
import { categories, Library } from "../../hooks/Library/type";
export default function Library() {
  const [libraryData, setLibraryData] = useState<Library[]>([]);
  const [libraryDatabyType, setLibraryDatabyType] = useState<Library[]>([]);
  const [selectedItem, setSelectedItem] = useState<Library | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(GETALL_Library_URL)
      const data = res.data.data;
      setLibraryData(data);
    };
    fetchData();
  }, []);
  const getDataByType = (type: string) => {
    const fetchDataByType = async () => {
      const response = await axios.get(`${GET_Library_BYTYPE}/${type}`,);
      const data = response.data.data;
      setLibraryDatabyType(data);
    }
    fetchDataByType()
  }
  const getDataById = (id: string) => {
    const fetchDataById = async () => {
      const response = await axios.get(`${GET_Library_BYID}/${id}`,);
      const data = response.data.data;
      console.log(data)
      setSelectedItem(data);
    }
    fetchDataById()
  }
  return (
    <div className="library-page">
      <div className="library-header">
        <h1 className="library-title">Thư Viện Ngôn Ngữ Cơ Thể Của Chó</h1>
        <p className="library-description">
          Hiểu cách chó giao tiếp thông qua ngôn ngữ cơ thể. Khám phá ý nghĩa đằng sau các tư thế, cử chỉ và biểu hiện
          khác nhau.
        </p>

        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm biểu hiện cơ thể..."
            className="search-input"
          />
        </div>
      </div>

      <div className="library-tabs">
        <div className="category-nav">
          {categories.map((category, index) => (
            <div className="category-item" key={index}
              onClick={() => getDataByType(category.type)}>
              <div className="category-icon">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}

        </div>
        <div className="tabs-content">
          <div className="tab-content active">
            <div className="cards-grid">
              {(libraryDatabyType.length > 0 ? libraryDatabyType : libraryData)?.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-image">
                    <img src={item?.images[0]} alt={item?.name} />
                  </div>
                  <h3 className="card-title">{item?.name}</h3>
                  <span className="card-category">{item?.tags[0]} / {item?.tags[1]}</span>
                  <p className="card-description">{item?.description}</p>
                  <button className="learn-more-btn" onClick={() => getDataById(item._id)}>Tìm hiểu thêm</button>
                </div>
              ))}
            </div>
            {selectedItem && (
              <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>
                  <h2>{selectedItem.name}</h2>
                  <h3>🎯 Ý Nghĩa Chính</h3>
                  <p>{selectedItem.description}</p>
                  {selectedItem.commonCases && (
                    <>
                      <h3>📊 Các Trường Hợp Thường Gặp</h3>
                      {selectedItem.commonCases.map((caseStr: string, idx: number) => {
                        const [title, ...descArr] = caseStr.split(":");
                        const desc = descArr.join(":").trim();
                        return (
                          <div key={idx} className="case-item">
                            <b className="case-title">{title}:</b> {desc}
                          </div>
                        );
                      })}

                    </>
                  )}
                  {selectedItem.distinguishingSigns && (
                    <>
                      <h3>🔍  Cách Phân Biệt</h3>
                      {selectedItem.distinguishingSigns.map((caseStr: string, idx: number) => {
                        const [title, ...descArr] = caseStr.split(":");
                        const desc = descArr.join(":").trim();
                        return (
                          <div key={idx} className="case-item">
                            <b className="case-title">{title}:</b> {desc}
                          </div>
                        );
                      })}
                    </>
                  )}
                  {selectedItem.reaction && (
                    <>
                      <h3>💡 Cách Phản Ứng</h3>
                      <div>{selectedItem.reaction}</div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}