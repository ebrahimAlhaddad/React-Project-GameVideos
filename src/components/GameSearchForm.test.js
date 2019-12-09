import React from "react";
import GameSearchForm from './GameSearchForm';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("Form handles invalid search value",()=>{
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <GameSearchForm onSearch={onClickHandler}/>
    );

    fireEvent.click(getByText("Search"));
    expect(queryByTestId("input-searchValue-error")).toHaveTextContent("You must enter a title");

});

it("Form handles valid search input",()=>{
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <GameSearchForm onSearch={onClickHandler}/>
    );
    fireEvent.change(getByTestId("input-searchValue"), {
        target: {
          value: "gameName"
        }
      });

    fireEvent.click(getByText("Search"));
    expect(queryByTestId("input-searchValue-error")).toBe(null);
});