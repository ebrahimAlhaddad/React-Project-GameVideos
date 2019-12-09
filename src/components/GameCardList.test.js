import React from "react";
import  GameCard from "./GameCard";
import GameCardList from "./GameCardList";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { isTSAnyKeyword } from "@babel/types";

it("click button function is called on respective game",()=>{
    var game = {
        id:"1",
        name:"name",
        rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
    };
    const onClickHandler = jest.fn();

    const {getByTestId, queryByTestId, container} = render(<GameCardList games={[game]} clickButton={onClickHandler}/>);
    expect(onClickHandler).toHaveBeenCalledWith(game);

});