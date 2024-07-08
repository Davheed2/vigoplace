import { useEffect } from "react";
import { useRouter } from "next/router";

const useScrollWithOffset = (offset: number) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const hashIndex = url.indexOf("#");
      if (hashIndex !== -1) {
        const hash = url.substring(hashIndex);
        const element = document.querySelector(hash);
        if (element) {
          const topPos =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: topPos, behavior: "smooth" });
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, offset]);
};

export default useScrollWithOffset;
