'use client'
import { useRef, useEffect, useState} from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function VlogPlayer({videoSrc,isPlaying}:{videoSrc:string,isPlaying:boolean}){
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(()=>{
        // alert('width is ' + videoRef.current?.videoWidth)
        if(isPlaying){
            // alert('Play video')
            videoRef.current?.play()
        }
        else{
            // alert('Pause video')
            videoRef.current?.pause()
        }
    },[isPlaying])
    // useWindowListener("resize",(e)=>{alert('Window width is ' +
    //     (e.target as Window).innerWidth)});
    return (
        <video className="w-[40%]" src={videoSrc} ref={videoRef} controls loop muted/>
    );
    
}