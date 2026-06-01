import { useEffect } from 'react';

export function useLodgifyScript() {
  useEffect(() => {
    // Load Lodgify script
    const script = document.createElement('script');
    script.src = 'https://cdn.lodgify.com/widgets/search-bar/latest/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
}
