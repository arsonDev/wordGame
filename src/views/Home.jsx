import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container-fluid">
            <h5>Witaj w WordGame</h5>
            <h3>
                Naciśnij <span style={{ color: "red" }}>start</span> aby rozpocząć{" "}
            </h3>
            <Link to="/game">
                <Button>start</Button>
            </Link>
        </div>
    );
}
