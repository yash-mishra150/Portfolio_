import { useEffect } from 'react';

const usePageVisibility = (visibleTitle, hiddenTitle) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = hiddenTitle;
      } else {
        document.title = visibleTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Set the initial title
    document.title = visibleTitle;

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [visibleTitle, hiddenTitle]);
};

export default usePageVisibility;
