export const texts = [
  {
    language: "にほんご",
    text: "こんにちは。",
    level: 1,
  },
  {
    language: "にほんご",
    text: "おはようございます。",
    level: 1,
  },
  {
    language: "にほんご",
    text: "こんばんは。",
    level: 1,
  },
  {
    language: "にほんご",
    text: "いただきます。",
    level: 1,
  },
  {
    language: "にほんご",
    text: "ごちそうさまでした。",
    level: 1,
  },
  {
    language: "にほんご",
    text: "あひるのさんぽ",
    level: 1,
  },
  {
    language: "にほんご",
    text: "ぞうのおどり",
    level: 1,
  },
  {
    language: "にほんご",
    text: "イルカのひるね",
    level: 1,
  },
  {
    language: "にほんご",
    text: "らくだのしょくじ",
    level: 1,
  },
  {
    language: "にほんご",
    text: "ラマのきゅうけい",
    level: 1,
  },
  {
    language: "にほんご",
    text: "川でおよぐ",
    level: 2,
  },
  {
    language: "Deutsch",
    text: "Ich bin Tomoki.",
    level: 1,
  },
];

const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";

function getRandomQuote() {
  fetch(RANDOM_QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data.content);
}

function getNextQuote() {
  const quote = getRandomQuote();
  console.log(quote);
}
