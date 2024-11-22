import React, { useState } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log('Sending message...');
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputValue,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('Making API request...');
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      console.log('Response received:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString()
      }]);

    } catch (error) {
      console.error('Error in chat:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting. Please try again. Error: " + error.message,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Main Content */}
      <div>
        {children}
      </div>

      {/* Chat Widget */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 99999 }}>
        {!isOpen ? (
          <button
            onClick={toggleChat}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '16px',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              outline: 'none'
            }}
          >
            <MessageCircle style={{ width: '24px', height: '24px' }} />
          </button>
        ) : (
          <div style={{
            width: '320px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            height: isMinimized ? '56px' : '480px',
            transition: 'height 0.3s ease'
          }}>
            {/* Chat Header */}
            <div style={{
              padding: '12px',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#2563eb',
              color: 'white',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageCircle style={{ width: '20px', height: '20px' }} />
                <span style={{ fontWeight: 500 }}>Climate Action Chat</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={toggleMinimize}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={toggleChat}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: 'calc(100% - 56px)'
              }}>
                {/* Messages Area */}
                <div style={{ 
                  flex: 1, 
                  overflowY: 'auto', 
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                      }}
                    >
                      <div style={{
                        maxWidth: '80%',
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: message.role === 'user' ? '#2563eb' : '#f3f4f6',
                        color: message.role === 'user' ? 'white' : 'black'
                      }}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {messages.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '16px' }}>
                      Welcome! Ask me anything about climate action in Africa.
                    </div>
                  )}
                  {isLoading && (
                    <div style={{ textAlign: 'center', color: '#6b7280' }}>
                      <span>...</span>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} style={{ 
                  borderTop: '1px solid #e5e7eb',
                  padding: '16px'
                }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        outline: 'none'
                      }}
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '8px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        opacity: isLoading ? 0.5 : 1,
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      disabled={isLoading}
                    >
                      <Send style={{ width: '20px', height: '20px' }} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLayout;