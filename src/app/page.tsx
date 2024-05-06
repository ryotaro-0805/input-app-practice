'use client'
import React, { ChangeEvent, useRef, useState } from 'react'
export default function Home() {
  const [getKey, setGetKey] = useState<string>('');
  const [entryTexts, setEntryText] = useState<string[]>([]);
  const [currentMode, setCurrentMode] = useState<string>('input');
  // const [testArrays, setTestArrays] = useState<string[]>(['food', 'vehicle', 'animal', 'nature', 'material']);
  const [handleNumber, setHandleNumber] = useState<number>(0);
  const [inputValue, setInputValue] = useState('');

  const ref: any = useRef<HTMLInputElement>();
  const getTextRef: any = useRef('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetKey(e.target.value);
  }
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEntryText((inner) => [...inner, getKey]);
      ref.current.value = '';
    }
  }
  const handleReset = () => {
    setEntryText(['']);
  }


  const handleEdit = (indata: any, index: number) => {
    // setTextGetter(indata.target.textContent.substring(2));
    setInputValue(indata.target.textContent.substring(2));
    setInputValue(indata.target.textContent);
    setCurrentMode('edit');
    setHandleNumber(index);

  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleReturn = () => {
    const newArrays: string[] = [...entryTexts];
    newArrays[handleNumber] = inputValue;
    setEntryText(newArrays)
    setCurrentMode('input');
  }
  const handleOnlyReturn = () => {
    setCurrentMode('input');
  }

  const handleDelete = () => {
    const newArrays: string[] = [...entryTexts];
    newArrays[handleNumber] = '';
    setEntryText(newArrays)
    setCurrentMode('input');
  }
  return (
    <div className='m-5'>
      {(currentMode === 'input') ?
        <div>
          <h2>Input App</h2>
          <div className='flex h-auto items-center'>
            <input ref={ref} onChange={handleChange} onKeyDown={handleSubmit} className='border h-7' type="text" />
            <button onClick={handleReset} className='border rounded-md p-1 bg-purple-200 ml-3'>Reset</button>
          </div>
          {entryTexts.map((entryText, index) => (
            <p onClick={(indata) => handleEdit(indata, index)} ref={getTextRef} key={index} className='m-3 cursor-pointer hover:bg-blue-100'>{entryText}</p>
          ))}
        </div>
        :
        <div>
          <p>THIS IS EDIT MODE</p>
          <form onSubmit={handleReturn} action="">
            <input className='border rouded-md mt-3' type="text" value={inputValue} onChange={handleInputChange} />
          </form>
          <button onClick={handleDelete} className='block mt-5 px-3 border border-green-500 rounded-md bg-green-100 hover:bg-green-200 duration-200 focus:bg-green-300'>削除する</button>
          <button onClick={handleReturn} className='block mt-5 px-3 border border-pink-500 rounded-md bg-pink-100 hover:bg-pink-200 duration-200 focus:bg-pink-300'>変更してinputモードに戻る</button>
          <button onClick={handleOnlyReturn} className='block mt-5 px-3 border border-yellow-500 rounded-md bg-yellow-100 hover:bg-yellow-200 duration-200 focus:bg-yellow-300'>変更せずにinputモードに戻る</button>
        </div>
      }
      <p className='mt-5' >現在のモード：{(currentMode === 'input') ? '入力画面です。' : '編集画面です。'}</p>
    </div>
  );
}
