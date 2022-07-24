import type { RequestHandler } from './__types/quote'

type Output = {
    quote: string;
};

const quotes = [
    "Well, pitter patter, let's get at 'er.",
    'Look if you are coming, you better come correct.',
    'Not my pig, not my farm.',
    'Hard no.'
];

export const GET: RequestHandler<Output> = () => {
    return {
        body: {
            quote: quotes[Math.floor(Math.random() * quotes.length)]
        }
    };
}
