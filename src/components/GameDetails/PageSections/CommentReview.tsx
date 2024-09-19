import { useAppSelector } from "@/lib/hooks";
import { ReactNode } from "react";

const FeedbackButton = ({ d, text }: { d: string; text: ReactNode }) => {
  return (
    <button className="flex justify-center items-center w-full lg:w-auto h-[50px] bg-white/10 text-white/50 px-[25px] rounded group transition-all duration-300 hover:text-black hover:bg-white">
      <span className="me-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path className="fill-white/50 transition-all duration-300 group-hover:fill-black" d={d}></path>
        </svg>
      </span>
      {text}
    </button>
  );
};

const CommentReview = () => {
  const { reviews_count } = useAppSelector(({ singleGame }) => singleGame);

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <FeedbackButton
        d="M8.714 11.286H2.286a1.286 1.286 0 010-2.572h6.428V2.286a1.286 1.286 0 012.572 0v6.428h6.428a1.286 1.286 0 010 2.572h-6.428v6.428a1.286 1.286 0 01-2.572 0v-6.428z"
        text={<span>Write a review {!!reviews_count && <span>{reviews_count}</span>}</span>}
      />
      <FeedbackButton
        d="M10 2.807c-3.984 0-7.225 2.93-7.225 6.531 0 3.602 3.24 6.531 7.225 6.531h.367l.26.265c.882.898 3.203 1.131 4.482 1.046l-1.492-2.135.754-.518c.096-.066.191-.135.284-.207 1.634-1.248 2.57-3.063 2.57-4.982 0-3.602-3.24-6.531-7.225-6.531M14.471 19c-1.598 0-3.61-.358-4.813-1.33C4.854 17.503 1 13.83 1 9.338 1 4.741 5.037 1 10 1s9 3.741 9 8.338c0 2.342-1.055 4.55-2.91 6.13l1.287 1.843v.288c0 .229-.08.795-.831 1.11-.422.18-1.185.291-2.075.291"
        text={<span>Write a comment</span>}
      />
    </div>
  );
};

export default CommentReview;
