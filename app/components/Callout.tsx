import React from 'react';
import { PortableText } from '@portabletext/react';

interface CalloutProps {
  value: {
    type: 'info' | 'warning' | 'success' | 'error';
    title?: string;
    content: any;
  };
}

const Callout: React.FC<CalloutProps> = ({ value }) => {
  const { type, title, content } = value;
  
  // Define styles based on callout type
  const styles = {
    info: {
      container: 'bg-blue-50 border-l-4 border-blue-500',
      icon: '💡',
      title: 'text-blue-800',
      content: 'text-blue-700'
    },
    warning: {
      container: 'bg-amber-50 border-l-4 border-amber-500',
      icon: '⚠️',
      title: 'text-amber-800',
      content: 'text-amber-700'
    },
    success: {
      container: 'bg-green-50 border-l-4 border-green-500',
      icon: '✅',
      title: 'text-green-800',
      content: 'text-green-700'
    },
    error: {
      container: 'bg-red-50 border-l-4 border-red-500',
      icon: '❌',
      title: 'text-red-800',
      content: 'text-red-700'
    }
  };
  
  const style = styles[type];
  
  return (
    <div className={`${style.container} p-4 my-6 rounded-r`}>
      <div className="flex items-start">
        <div className="mr-3 text-xl">{style.icon}</div>
        <div>
          {title && (
            <h4 className={`${style.title} font-semibold mb-2`}>{title}</h4>
          )}
          <div className={`${style.content} prose-sm`}>
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
