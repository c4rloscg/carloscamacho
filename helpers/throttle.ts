type ThrottleSettings = {
  leading?: boolean;
  trailing?: boolean;
};

export function throttle<F extends (...args: any[]) => void>(
  func: F,
  wait: number,
  options: ThrottleSettings = {}
): F {
  let timeoutId: number | null = null;
  let lastArgs: any[] | null = null;
  let lastThis: ThisParameterType<F> | null = null;
  let lastCallTime: number | null = null;
  const { leading = true, trailing = true } = options;

  const invokeFunction = () => {
    if (lastArgs === null || lastThis === null) return;
    func.apply(lastThis, lastArgs);
    lastCallTime = Date.now();
    lastArgs = null;
    lastThis = null;
    timeoutId = null;
  };

  const shouldInvoke = (time: number): boolean => {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    return lastCallTime === null || timeSinceLastCall >= wait;
  };

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;

    if (isInvoking) {
      if (leading && !timeoutId) {
        invokeFunction();
      } else if (!leading && trailing && !timeoutId) {
        timeoutId = window.setTimeout(() => {
          if (trailing) invokeFunction();
        }, wait);
      }
    } else if (trailing && !timeoutId) {
      timeoutId = window.setTimeout(() => {
        if (trailing) invokeFunction();
      }, wait - (time - (lastCallTime ?? 0)));
    }
  } as F;
}

export default throttle;
