import { useEffect } from 'react';

/**
 * Hook to monitor and log performance metrics
 * @param componentName - Name of the component for logging
 * @param dependencies - Dependencies to watch for re-renders
 */
export function usePerformanceMonitor(componentName: string, dependencies?: any[]) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const renderStart = performance.now();
      
      return () => {
        const renderEnd = performance.now();
        const renderTime = renderEnd - renderStart;
        
        if (renderTime > 16) { // Flag renders longer than 16ms (60fps)
          console.warn(
            `🐌 Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`
          );
        }
      };
    }
  }, dependencies);
}

/**
 * Hook to measure component mount time
 * @param componentName - Name of the component
 */
export function useMountTime(componentName: string) {
  useEffect(() => {
    const mountStart = performance.now();
    
    return () => {
      const mountEnd = performance.now();
      const mountTime = mountEnd - mountStart;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`⚡ ${componentName} mount time: ${mountTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);
}

/**
 * Hook to track Web Vitals and Core Web Vitals
 */
export function useWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`📊 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`📊 FID: ${entry.processingStart - entry.startTime}ms`);
          }
        });
      }).observe({ entryTypes: ['first-input'] });
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`📊 CLS: ${clsValue.toFixed(4)}`);
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    measureLCP();
    measureFID();
    measureCLS();
  }, []);
}