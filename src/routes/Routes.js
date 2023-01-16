import React from "react";

import {
  BrowserRouter,

  Route,
  Routes as Routess,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../container/user/pages/Home";
import NFTStory from "../container/user/pages/NFTStory";
//#region user

const history = createBrowserHistory();
export default function Routes() {

  return (
    <BrowserRouter history={history}>
      <Routess>
        <Route path="/" element={<Home />} />
        <Route path="nftstory" element={<NFTStory />} />

      </Routess>
    </BrowserRouter>
  );
}