declare module 'aos' {
  interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?:
      | 'top-bottom'
      | 'top-center'
      | 'top-top'
      | 'center-bottom'
      | 'center-center'
      | 'center-top'
      | 'bottom-bottom'
      | 'bottom-center'
      | 'bottom-top';
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
