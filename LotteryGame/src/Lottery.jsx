import { useState } from "react";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n))
    };

    return (
        <div className="lottery">
            <h1>Lottery Game</h1>
            <h3>{isWinning && "Congratulations , you won!"}</h3>
            <Ticket ticket={ticket} />
            <br />
            <Button onClick={buyTicket}/>
        </div>
    )
}