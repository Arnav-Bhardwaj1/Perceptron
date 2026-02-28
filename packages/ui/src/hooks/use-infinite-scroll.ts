import { useCallback, useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  status: "LoadingFirstPage" | "CanLoadMore" | "LoadingMore" | "Exhausted";
  loadMore: (numItems: number) => void; // Callback function to load more items, accepts the number of items to load as an argument
  loadSize?: number;
  observerEnabled?: boolean; // Option to enable or disable the Intersection Observer, useful for testing or if you want to trigger loadMore manually
}

export const useInfiniteScroll = ({
  status,
  loadMore,
  loadSize = 10,
  observerEnabled = true, // Default to true to enable infinite scroll by default
}: UseInfiniteScrollProps) => {
  const topElementRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(() => {
    if (status === "CanLoadMore") {
      loadMore(loadSize);
    }
  }, [status, loadMore, loadSize]);

  useEffect(() => {
    const topElement = topElementRef.current;
    if (!topElement && observerEnabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) { // When the top element is visible, attempt to load more items
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    return () => {
      observer.disconnect(); // Clean up the observer on unmount or when dependencies change so that we don't have multiple observers running at the same time
    };
  }, [handleLoadMore, observerEnabled]);

  return {
    topElementRef,
    handleLoadMore,
    canLoadMore: status === "CanLoadMore",
    isLoadingMore: status === "LoadingMore",
    isLoadingFirstPage: status === "LoadingFirstPage",
    isExhausted: status === "Exhausted",
  };
};