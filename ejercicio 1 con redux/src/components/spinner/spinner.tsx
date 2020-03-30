import React from 'react';
import { promiseTrackerHoc } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";
import './spinner.css';

export const InnerSpinner = (props) => {
const { promiseInProgress } = usePromiseTracker();
 return  (promiseInProgress &&
  <div className="spinner">
    <Loader
      type="ThreeDots"
      color="#2BAD60"
      height= {100}
      width= {100}
    />
 </div>);
};

export const Spinner = promiseTrackerHoc(InnerSpinner);