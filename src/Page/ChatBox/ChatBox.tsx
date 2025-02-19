import React, { useState } from 'react'
import '../ChatBox/chatbox.css'
import { ChatAlt2Icon, MinusIcon, PaperAirplaneIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import OpenAI from 'openai'
import { Link } from 'react-router-dom'

export default function ChatBox() {
  // phải login mới được hỏi
  const [close, setClose] = useState(true)
  const handCloseBoxChat = () => {
    setClose(true)
  }
  const [prompt, setPrompt] = useState('')
  const [answer, setAnswer] = useState('')

  const getAnswer = async (prompt: string) => {
    if (!prompt.trim()) return
    const api_key = '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'
    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'deepseek/deepseek-r1:free',
          messages: [{ role: 'user', content: prompt }]
        },
        {
          headers: {
            Authorization: `Bearer ${api_key}`,
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(response.data)
      setAnswer(response.data.choices[0].message.content)
    } catch (error) {
      console.error('Error fetching AI response:', error)
      setAnswer('Xin lỗi, có lỗi xảy ra.')
    }
  }
  const handOpenBoxChat = () => {
    setClose(false)
  }
  const renderBoxChat = () => {
    return (
      <>
        <div className={`chat ${close ? 'hidden' : ''}`}>
          <div className='boxChat'>
            <div className='boxChat_header'>
              <div className='boxChat_header_name'>
                <UserIcon className='boxChat_header_name_icon' />
                <p>Admin</p>
              </div>
              <div className='boxChat_header_icon'>
                <li>
                  <MinusIcon className='boxChat_header_name_icon' />
                </li>
                <li>
                  <XIcon className='boxChat_header_name_icon' onClick={handCloseBoxChat} />
                </li>
              </div>
            </div>
            <div className='boxChat_body'>
              <div className='AI_Answer'>
                <UserIcon className='AI_icon' />
                <span>{answer}</span>
              </div>
            </div>
            <div className='boxChat_footer'>
              <div className='boxChat_footer_send'>
                {/* <input type='file' onChange={(event) => setPrompt(event.target.value)} /> */}
                <input
                  onChange={(event) => setPrompt(event.target.value)}
                  type='text'
                  placeholder='Gửi tin nhắn tại đây'
                  className='boxChat_footer_send_input'
                />
                {/* <Link to='/login'>
                  <input type='text' className='boxChat_footer_send_input ban' placeholder='Hãy login để được hỏi' />
                </Link> */}
              </div>

              <button className='boxChat_footer_click' onClick={() => getAnswer(prompt)}>
                <PaperAirplaneIcon className='boxChat_footer_click_btn' />
              </button>
            </div>
          </div>
        </div>
        <div className=''>
          <ChatAlt2Icon className={`icon_chat ${close ? 'open' : 'hidden'}`} onClick={handOpenBoxChat} />
        </div>
      </>
    )
  }
  return <div>{renderBoxChat()}</div>
}
