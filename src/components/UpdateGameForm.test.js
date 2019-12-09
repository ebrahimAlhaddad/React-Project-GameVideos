import React from "react";
import UpdateGameForm from './UpdateGameForm';
import { render, fireEvent } from "@testing-library/react";
import {NavLink, BrowserRouter as Router} from 'react-router-dom';

import "@testing-library/jest-dom/extend-expect";

it("Form handles invalid name value",()=>{
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <Router>
            <UpdateGameForm onSubmit={onClickHandler}/>
        </Router>
    );

    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-title-error")).toHaveTextContent("You must enter a title");
});
it("Form handles valid name value",()=>{
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <Router>
            <UpdateGameForm onSubmit={onClickHandler}/>
        </Router>
    );

    fireEvent.change(getByTestId("input-title"), {
        target: {
          value: "testName"
        }
    });
    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-title-error")).toBe(null);
});

it("Form handles valid rating value",()=> {
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <Router>
            <UpdateGameForm onSubmit={onClickHandler}/>
        </Router>
    );

    fireEvent.change(getByTestId("input-rating"), {
        target: {
          value: "4"
        }
    });
    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-rating-error")).toBe(null);
});
it("Form handles invalid rating value",()=> {
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <Router>
            <UpdateGameForm onSubmit={onClickHandler}/>
        </Router>
    );

    fireEvent.change(getByTestId("input-rating"), {
        target: {
          value: "bad"
        }
    });
    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-rating-error")).toHaveTextContent("You must enter a valid rating(0-5)");
    fireEvent.change(getByTestId("input-rating"), {
        target: {
          value: "8"
        }
    });
    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-rating-error")).toHaveTextContent("You must enter a valid rating(0-5)");
});

it("Form handles valid date value",()=>{
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <Router>
            <UpdateGameForm onSubmit={onClickHandler}/>
        </Router>
    );
    fireEvent.change(getByTestId("input-date"), {
        target: {
          value: "2001-01-01"
        }
    });
    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-date-error")).toBe(null);
});
it("Form handles invalid date value",()=>{
    const onClickHandler = jest.fn();

    const {getByTestId, getByText,queryByTestId} = render(
        <Router>
            <UpdateGameForm onSubmit={onClickHandler}/>
        </Router>
    );

    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-date-error")).toHaveTextContent("You must enter a valid date");

    fireEvent.change(getByTestId("input-date"), {
        target: {
          value: "2120-01-01"
        }
    });
    fireEvent.click(getByTestId("submit-btn"));
    expect(queryByTestId("input-date-error")).toHaveTextContent("You must enter a valid date");
});
