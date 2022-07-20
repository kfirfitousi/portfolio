const quotes = [
  "Well, pitter patter, let's get at 'er.",
  "Look if you are coming, you better come correct.",
  "Not my pig, not my farm.",
  "Hard no."
];

export async function GET() {
  return {
    body: {
      quote: quotes[Math.floor(Math.random() * quotes.length)],
    },
  };
}