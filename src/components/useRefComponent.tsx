import { ReactNode, useRef, useEffect } from 'react';

interface UseRefComponentProps {
  children: ReactNode; // Accepts any React node as children
  onClose: () => void; // Function to call when closing
}

const UseRefComponent: React.FC<UseRefComponentProps> = ({ children, onClose }) => {
  const componentRef = useRef<HTMLDivElement | null>(null); // Reference to the component

  // Handle clicks outside the component
  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
      onClose(); // Trigger the onClose function passed as a prop
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on unmount
    };
  }, []);

  return <div ref={componentRef}>{children}</div>; // Render the child component inside
};

export default UseRefComponent;
