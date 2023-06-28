
import React, {useEffect, useState, useContext, useRef} from 'react';
import axios from 'axios';
import {UserOauthContext} from "../context/UserContext";
import { io, Socket } from 'socket.io-client';
import MyComment from './MyComment';

export default function Reply({reply}) {


    return (
        <>
    <div className="border border-black">
        <div className="ml-8">
        {reply.username}
        </div>
        <div className="ml-10">
        {reply.reply}
        </div>
     
    </div>
        
        </>
    )
}
