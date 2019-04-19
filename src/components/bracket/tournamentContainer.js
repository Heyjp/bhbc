import React from 'react';
import tournamentStyles from './tournament.module.scss';

const RoundTitle = (props) => (
    <div className={tournamentStyles.title}>
        <h5 className={tournamentStyles.titleText}>{props.title}</h5>
    </div>
)

const Match = () => (
    <ul className={tournamentStyles.playerList}>
        <li className={tournamentStyles.player}>Player 1</li>
        <li className={tournamentStyles.player}>Player 2</li>
    </ul>
)


export default () => (
    <div className={tournamentStyles.container}>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Round 1"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Round 2"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Round 3"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                    <Match></Match>
                </div>
            </div>
            <div className={tournamentStyles.round}>
                <RoundTitle title="Finals"></RoundTitle>
                <div className={tournamentStyles.matchwrap}>
                    <Match></Match>
                </div>
            </div>
    </div>
)