import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. ",
  },
  {
    id: 2,
    rating: 9,
    text: "Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can’t tell you how many times clients have asked me why their website is in another language!",
  },
  {
    id: 3,
    rating: 8,
    text: "There are other placeholder text alternatives like Hipster Ipsum, Zombie Ipsum, Bacon Ipsum, and many more. ",
  },
]);
