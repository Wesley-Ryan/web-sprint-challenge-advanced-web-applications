import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors } from '../utils';
import { act } from "react-dom/test-utils";


const fakeColorData = [
	{
		color: "aliceblue",
		code: {
			hex: "#f0f8ff"
		},
		id: 1
	},
	{
		color: "limegreen",
		code: {
			hex: "#99ddbc"
		},
		id: 2
	},
	{
		color: "aqua",
		code: {
			hex: "#00ffff"
		},
		id: 3
	},
	{
		color: "aquamarine",
		code: {
			hex: "#7fffd4"
		},
		id: 4
	}
];

jest.mock('../utils')

test("Fetches data and renders the bubbles", async() => {
	// Finish this test
	fetchColors.mockResolvedValueOnce(fakeColorData);
	await act(async () => {
	  render(<BubblePage />);
	});
 	const bubbles = screen.getByText(/bubbles/i)
 	expect(bubbles).toBeInTheDocument()
 	const aqua = screen.getByText(/aqua/i)
 	expect(aqua).toBeInTheDocument()
 });