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
    <div>
      <p>test text</p>
    </div>
  );
}
