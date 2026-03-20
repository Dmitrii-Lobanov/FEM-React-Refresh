import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import { Pizza } from "../Pizza";

afterEach(cleanup);

test("alt text renders on image", () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test('To have a default image when none is provided', () => {
  const screen = render(
    <Pizza name="My Favorite Pizza" description="super cool pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe("https://picsum.photos/200");
})