import React, { useRef, useState } from 'react'
import '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
import * as cocoSsd from '@tensorflow-models/coco-ssd'
export default function tensorflow() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imgData, setImgData] = useState<string | null>(null)
  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }
  const detectObjectsOnImage = async (imageElement: HTMLImageElement) => {
    const model = await cocoSsd.load()
    const predictions = await model.detect(imageElement, 10, 0.5)
    predictions.map((prediction) => {
      console.log(prediction.class) //lấy được category ở chỗ này
    })
  }
  const readImage = (file: File) => {
    return new Promise<string>((rs, rj) => {
      const fileReader = new FileReader()
      fileReader.onload = () => rs(fileReader.result as string)
      fileReader.onerror = () => rj(fileReader.error)
      fileReader.readAsDataURL(file)
    })
  }

  const onSelectImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imgData = await readImage(file)
      // setImgData(imgData)
      const imageElement = document.createElement('img')
      imageElement.src = imgData
      imageElement.onload = () => {
        detectObjectsOnImage(imageElement)
      }
    }
  }
  return (
    <div>
      <div>{imgData && <img src={imgData} alt='Selected' className='preview' />}</div>
      <input type='file' ref={fileInputRef} onChange={onSelectImage} style={{ display: 'none' }} />
      <button onClick={openFilePicker}>Select Image</button>
    </div>
  )
}
