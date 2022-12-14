import { useEffect } from "react";

const useTitle  = title => {
  useEffect(() => {
    document.title = `${title} - Saruar Alam`
  }, [title])
};

export default useTitle;