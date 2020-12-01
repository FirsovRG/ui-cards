import React from "react";
import { cn } from "@bem-react/classname";

import "./card.scss";

const card = cn("card");

const Card: React.FC = () => <div className={card()} />;

export default Card;
