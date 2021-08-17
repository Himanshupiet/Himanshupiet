/** @format */

import React from 'react';
import MultiProgressBarStyle from  './MultiStepProgressBar.module.css';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

const MultiStepProgressBar = (props) => {
    var stepPercentage = 0;

    if (props.currentStep === 1) {
        stepPercentage = 0;
    }
    else if (props.currentStep === 2) {
        stepPercentage = 100;
    }
    else {
        stepPercentage = 0;
    }

    return (
        <ProgressBar percent={stepPercentage} filledBackground='#e31422'>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`${MultiProgressBarStyle.indexedStep} ${accomplished ? 'accomplished' : null}`}>
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`${MultiProgressBarStyle.indexedStep} ${accomplished ? 'accomplished' : null}`}>
                        {index + 1}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
};

export default MultiStepProgressBar;
