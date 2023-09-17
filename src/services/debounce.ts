export function debounce<A = unknown, R = void>(
    fn: (args: A) => R,
    ms: number,
): [(args: A) => Promise<R>, () => void] {

    let timer: NodeJS.Timeout;

    const debounceFunc = (args: A): Promise<R> =>
        new Promise((resolve) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                resolve(fn(args));
            }, ms);
        });

    const clearDebounce = () => clearTimeout(timer);
    return [debounceFunc, clearDebounce];
}