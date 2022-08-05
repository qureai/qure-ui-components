import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/testing-react";
import Meta, {
  Primary as PrimaryStory,
  Secondary as SecondaryStory,
  Link as LinkStory,
} from "../../../stories/Button.stories";
import { defaultStyles, sizes, variants } from "../constants";
import IButton, { SIZES, VARIANTS } from "../Button.model";

const getClassName = (variant: VARIANTS, size: SIZES) => {
  const defaultStylesAsClassNames = defaultStyles;
  const variantClassNames = variants[variant];
  const sizeClassNames = sizes[size];

  return `${defaultStylesAsClassNames} ${variantClassNames} ${sizeClassNames}`;
};

describe("Primary Button", () => {
  const Primary = composeStory(PrimaryStory, Meta);
  it("renders with default args", () => {
    render(<Primary />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toBeNull();
  });

  it("has default classname", () => {
    render(<Primary />);
    const buttonElement = screen.getByRole("button");
    const { className } = buttonElement;
    expect(className).toEqual(getClassName("primary", "normal"));
  });

  it("calls the onClick fn", () => {
    const mockFn = jest.fn();

    render(<Primary onClick={mockFn} />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalled();
  });

  it("shows the passed label", () => {
    const { getByRole } = render(<Primary />);
    const buttonElement = getByRole("button");

    const { textContent } = buttonElement;
    expect(textContent).toEqual(Primary.args.children);
  });
});

describe("Secondary Button", () => {
  const Secondary = composeStory(SecondaryStory, Meta);
  it("renders with args", () => {
    const { getByRole } = render(<Secondary />);
    const buttonElement = getByRole("button");

    expect(buttonElement).not.toBeNull();
    expect(buttonElement.className).toEqual(
      getClassName("secondary", "normal")
    );
  });
});

describe("Link Button", () => {
  const Link = composeStory(LinkStory, Meta);
  it("renders with args", () => {
    const { getByRole } = render(<Link />);
    const buttonElement = getByRole("button");

    expect(buttonElement).not.toBeNull();
    expect(buttonElement.className).toEqual(getClassName("link", "normal"));
  });
});

describe("Small Primary Button", () => {
  const Primary = composeStory(PrimaryStory, Meta);
  it("renders with args", () => {
    const { getByRole } = render(<Primary size="small" />);
    const buttonElement = getByRole("button");

    expect(buttonElement).not.toBeNull();
    expect(buttonElement.className).toEqual(getClassName("primary", "small"));
  });
});
