type DebounceSettings = {
  leading?: boolean;
  trailing?: boolean;
};

export function debounce<F extends (...args: any[]) => void>(
  func: F,
  wait: number,
  options: DebounceSettings = {}
): F {
  let timeoutId: number | null = null;
  let lastArgs: any[] | null = null;
  let lastThis: ThisParameterType<F> | null = null;
  let lastCallTime: number | null = null;

  const { leading = false, trailing = true } = options;

  const invokeFunction = () => {
    if (lastArgs === null || lastThis === null) return;
    func.apply(lastThis, lastArgs);
    lastArgs = null;
    lastThis = null;
    lastCallTime = null;
  };

  const shouldInvoke = (time: number): boolean => {
    if (lastCallTime === null) return true;
    const timeSinceLastCall = time - lastCallTime;
    return timeSinceLastCall >= wait;
  };

  const timerExpired = () => {
    const time = Date.now();
    if (lastArgs && shouldInvoke(time)) {
      invokeFunction();
    }
    timeoutId = null;
  };

  const startTimer = () => {
    timeoutId = window.setTimeout(timerExpired, wait);
  };

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    lastArgs = args;
    lastThis = this;
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    if (!timeoutId) startTimer();

    if (isInvoking) {
      if (leading) {
        if (timeoutId) clearTimeout(timeoutId);
        invokeFunction();
        startTimer();
      }
      lastCallTime = time;
    }

    if (!timeoutId && trailing) {
      startTimer();
    }
  } as F;
}

export default debounce;
