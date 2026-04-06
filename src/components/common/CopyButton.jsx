import { useState, useRef } from 'react';
import './CopyButton.css'


function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null); // guardamos el timeout

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);

    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null; // limpiamos el ref
    }, 2000);
  };


    return(
    <button className='copy-btn' onClick={handleCopy}>
      {copied ? 'Copiado' : 'Copiar'}
    </button>  
    );
}

export default CopyButton;
