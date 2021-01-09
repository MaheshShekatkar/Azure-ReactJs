import React from "react";
import ReactDOM from "react-dom";
import { of,interval,range,timer,fromEvent,iif,from,concat,merge,combineLatest} from 'rxjs';
import { mergeMap,map, take,startWith,takeWhile,switchMap,filter,skip,repeat,reduce,tap,takeUntil } from 'rxjs/operators';
import * as serviceWorker from './serviceWorker';
import { format } from 'date-fns'
import { Observable } from 'rxjs';
import "./index.css";
import  App from './App.js';
import { fi } from "date-fns/locale";

ReactDOM.render(<App />, document.getElementById("root"));

const startButton = document.querySelector("#Start");
const stopButton = document.querySelector("#Stop");
const resetButton = document.querySelector("#Restart");

const start$ = fromEvent(startButton,"click");
const stop$ = fromEvent(stopButton,"click");
const reset$ = fromEvent(resetButton,"click");

const interval$ = interval(1000);

const pausible$ = interval$.pipe(takeUntil(stop$));

const apps$ = start$
            .pipe(
             switchMap(interval$)
             )
            .subscribe(x => console.log(x));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
