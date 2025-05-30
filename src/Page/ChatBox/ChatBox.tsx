import React, { useState, useRef, useEffect } from 'react';
import { ChatAlt2Icon, PaperAirplaneIcon, UserIcon, XIcon, MinusIcon, TrashIcon } from '@heroicons/react/outline';
import '../ChatBox/chatbox.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CHATWITHAI_URL, DELETE_CHATUSER_URL, GET_CHATUSER_URL } from '../../hooks/AI/constant';
import ReactMarkdown from 'react-markdown';
export interface Message {
  _id?: string;
  userId?: string;
  role: 'user' | 'ai';
  content: string;
  timestamp?: string;
  createdAt?: string;
  updatedAt?: string;
}

const ChatBox = () => {
  const [close, setClose] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  const openDeleteDialog = () => setIsDeleteDialogOpen(true);
  const closeDeleteDialog = () => setIsDeleteDialogOpen(false);
  const token = userInfo?.token;
  const userId = userInfo?.id;

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(`${GET_CHATUSER_URL}/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data: Message[] = response.data.data;

        const sorted = data.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

        setMessages(sorted);
      } catch (error) {
        console.log(error)
      }
    };
    fetchChatHistory();

    // eslint-disable-next-line
  }, [close]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const getAnswer = async (content: string) => {
    if (!userId) {
      toast.warning('Vui lòng đăng nhập');
      return;
    }
    console.log(userId)
    if (!content.trim()) {
      toast.error('Vui lòng nhập câu hỏi');
      return;
    }

    setIsLoading(true);

    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const response = await axios.post(CHATWITHAI_URL, {
        userId,
        content,
      });

      const data = await response.data.data;
      const aiMessage: Message = {
        ...data,
        role: 'assistant',
        timestamp: new Date().toISOString(),
      };


      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setPrompt('');

    } catch (error) {
      console.error('Error fetching AI response:', error);
      toast.error('Xin lỗi, có lỗi xảy ra.');
    } finally {
      setIsLoading(false);
    }
  };
  // const feedback = () => {
  //   const res = await axios.post(POST_FEEDBACK_URL, {
  //     messageId, feedbackType
  //   })
  // }

  const clearChatHistory = async () => {
    if (!userId) {
      toast.error('Vui lòng đăng nhập');
      return;
    }
    if (!token) return;
    try {
      const response = await axios.delete(`${DELETE_CHATUSER_URL}/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setMessages([]);
        toast.success('Đã xóa lịch sử thành công');
        closeDeleteDialog();
      } else {
        toast.error('Không thể xóa lịch sử chat.');
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra khi xóa lịch sử chat.');
    }
  };

  const handleSend = () => {
    getAnswer(prompt);
  };

  const renderChatBody = () => {
    return messages.map((msg) => (
      <div key={msg._id || msg.timestamp} className={`message-container ${msg.role}`}>
        <div className={`message ${msg.role === 'user' ? 'user-message' : 'assistant'}`}>
          {msg.role === 'assistant' && (
            <div className='message-icon'>
              <UserIcon className='AI_icon' />
            </div>
          )}
          <div className='message-content'>
            <ReactMarkdown>{msg.content}</ReactMarkdown>
            {/* onClick={() => submitFeedback(message._id, 'useful')} */}
            <div className="feedback-buttons">
              <button>
                👍 <span>Hữu ích</span>
              </button>
              <button>
                👎 <span>Không hữu ích</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    ));
  };

  const renderLoading = () => {
    if (!isLoading) return null;
    return (
      <div className="message-container ai">
        <div className="message ai-message message-loading">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  };

  const renderBoxChat = () => {
    if (!userId) {
      return (
        <ChatAlt2Icon
          className={`icon_chat ${close ? 'open' : 'hidden'}`}
          onClick={() => alert('Vui lòng đăng nhập')}
        />
      );
    }
    return (
      <>
        <div className={`chat ${close ? 'hidden' : ''}`}>
          <div className='boxChat'>
            <div className='boxChat_header'>
              <div className='boxChat_header_name'>
                <UserIcon className='boxChat_header_name_icon' />
                <p>Animal</p>
              </div>
              <div className='boxChat_header_icon'>
                <MinusIcon className='boxChat_header_name_icon' />
                <XIcon className='boxChat_header_name_icon' onClick={() => setClose(true)} />
              </div>
            </div>
            <div ref={chatBodyRef} className='boxChat_body'>
              {renderChatBody()}
              {renderLoading()}
            </div>
            <div className='boxChat_footer'>
              <div className='boxChat_footer_send'>
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  type='text'
                  placeholder='Gửi tin nhắn tại đây'
                  className='boxChat_footer_send_input'
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isLoading}
                />
              </div>
              <div className='footer-actions'>
                <button
                  className='boxChat_footer_click'
                  onClick={handleSend}
                  disabled={isLoading || !prompt.trim()}
                >
                  <PaperAirplaneIcon className='boxChat_footer_click_btn' />
                </button>
                <button
                  className='clear-history-btn'
                  onClick={openDeleteDialog}
                  disabled={isLoading}
                >
                  <TrashIcon className='trash_icon' />
                </button>
                {isDeleteDialogOpen && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className="modal-title">
                          <svg className="icon-warning" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10.29 3.86L1.82 18a1.5 1.5 0 001.29 2.25h17.78a1.5 1.5 0 001.29-2.25L13.71 3.86a1.5 1.5 0 00-2.42 0zM12 9v4m0 4h.01" />
                          </svg>
                          Xác nhận xóa lịch sử
                        </div>
                        <div className="modal-description">
                          Bạn có chắc chắn muốn xóa toàn bộ lịch sử trò chuyện? Hành động này không thể hoàn tác.
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button className="cancel-button" onClick={closeDeleteDialog}>Hủy</button>
                        <button className="delete-confirm-button" onClick={clearChatHistory}>Xóa lịch sử</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
        <ChatAlt2Icon
          className={`icon_chat ${close ? 'open' : 'hidden'}`}
          onClick={() => setClose(false)}
        />
      </>
    );
  };

  return <div>{renderBoxChat()}</div>;
};

export default ChatBox;