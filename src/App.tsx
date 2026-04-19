import { useState } from 'react'
import './App.css'
import PromptInput from './PromptInput'

function App() {
  const [submittedPrompt, setSubmittedPrompt] = useState<{ prompt: string; model: string } | null>(null);

  const handlePromptSubmit = (prompt: string, model: string) => {
    setSubmittedPrompt({ prompt, model });
    // Here you can add logic to send to backend or handle the prompt
    console.log('Prompt submitted:', { prompt, model });
  };

  return (
    <div>
      <PromptInput onSubmit={handlePromptSubmit} />
      {submittedPrompt && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          maxWidth: '300px',
          zIndex: 1000
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '600' }}>Last Submitted:</h3>
          <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}><strong>Model:</strong> {submittedPrompt.model}</p>
          <p style={{ margin: '0', fontSize: '14px' }}><strong>Prompt:</strong> {submittedPrompt.prompt.slice(0, 100)}...</p>
        </div>
      )}
    </div>
  )
}

export default App
