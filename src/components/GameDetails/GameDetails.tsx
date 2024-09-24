"use client";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Breadcrumb from "./PageSections/Breadcrumb";
import CommentReview from "./PageSections/CommentReview";
import AboutGame from "./PageSections/AboutGame";
import EditGame from "./PageSections/EditGame";
import GameBackground from "./PageSections/GameBackground";
import GameMeta from "./PageSections/GameMeta";
import UserActions from "./PageSections/UserActions";
import Ratings from "./PageSections/Ratings";
import RatingBars from "./PageSections/RatingBars";
import RatingButtons from "./PageSections/RatingButtons";
import QuickInfos from "./PageSections/QuickInfos";
import SystemReqs from "./PageSections/SystemReqs";
import GameScreenshots from "./PageSections/GameScreenshots";
import Stores from "./PageSections/Stores";
import useWideScreen from "@/hooks/useWideScreen";
import useClient from "@/hooks/useClient";
import { getSingleGame, resetGameState } from "@/lib/features/singleGame/singleGameSlice";
import { usePathname } from "next/navigation";

const GameDetails = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const wideScreen = useWideScreen();
  const client = useClient();
  const path = usePathname();  

  useEffect(() => {
    dispatch(getSingleGame(path.slice(path.lastIndexOf("/")+1)));
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(resetGameState());
    };
  }, []);
    
  return (
    <div className="w-full lg:w-[960px] mx-auto max-w-[480px] lg:max-w-[960px]">
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row">
        {/* Left part */}
        <div>
          <GameMeta />
          {wideScreen || <GameScreenshots />}
          <UserActions />
          {wideScreen || <EditGame />}
          <Ratings />
          <RatingBars />
          <RatingButtons />
          <CommentReview />
          <AboutGame />
          <QuickInfos />
          <SystemReqs />
        </div>
        {/* Right part */}
        <div className="lg:ms-12 lg:w-96">
          {wideScreen && <GameScreenshots />}
          {wideScreen && <EditGame />}
          <Stores />
        </div>
      </div>
      {client && createPortal(<GameBackground />, document.body)}
    </div>
  );
};

export default GameDetails;
