import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("⭐ ErrorMessage", () => {
  it("it renders default error state", () => {
    render(<ErrorMessage />);
    // screen.debug();
    // Never get text value of an element by div, classes, ids or any other attributes
    //  Always use data-testid attribute for getting text values, it is like NOT using innerHTML but using innerText
    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Something went wrong"
    );
  });

  it("it renders any given custom error state", () => {
    render(
      <ErrorMessage message="You're doing great Serhat! Keep up the good work!" />
    );
    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "You're doing great Serhat! Keep up the good work!"
    );
  });
});
